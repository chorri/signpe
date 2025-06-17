from flask import Flask, request, jsonify, render_template, send_from_directory
import cv2
import numpy as np
import tensorflow as tf
import mediapipe as mp
import json
import base64
import firebase_admin
from firebase_admin import credentials, firestore
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

firebase_config = {
    "type": os.environ.get("FIREBASE_TYPE"),
    "project_id": os.environ.get("FIREBASE_PROJECT_ID"),
    "private_key_id": os.environ.get("FIREBASE_PRIVATE_KEY_ID"),
    "private_key": os.environ.get("FIREBASE_PRIVATE_KEY").replace('\\n', '\n'),
    "client_email": os.environ.get("FIREBASE_CLIENT_EMAIL"),
    "client_id": os.environ.get("FIREBASE_CLIENT_ID"),
    "auth_uri": os.environ.get("FIREBASE_AUTH_URI"),
    "token_uri": os.environ.get("FIREBASE_TOKEN_URI"),
    "auth_provider_x509_cert_url": os.environ.get("FIREBASE_AUTH_PROVIDER_CERT_URL"),
    "client_x509_cert_url": os.environ.get("FIREBASE_CLIENT_CERT_URL"),
    "universe_domain": os.environ.get("FIREBASE_UNIVERSE_DOMAIN")
}

try:
    cred = credentials.Certificate(firebase_config)
    firebase_admin.initialize_app(cred)
except Exception as e:
    print(f"Firebase init failed: {e}")
    raise e

db = firestore.client()

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

# Cargar modelo y labels
MODEL_PATH = 'models-v9/color_v9.keras'
LABELS_PATH = 'models-v9/color_labels.json'

model = tf.keras.models.load_model(MODEL_PATH)
with open(LABELS_PATH, 'r') as f:
    labels = json.load(f)

# Inicializar MediaPipe
mp_pose = mp.solutions.pose
mp_hands = mp.solutions.hands
pose = mp_pose.Pose(static_image_mode=True)
hands = mp_hands.Hands(static_image_mode=True, max_num_hands=2)




def add_category_with_signs(custom_category_id, category_name, category_description, category_icon, level_id, signs):
    category_ref = db.collection("categories").document(custom_category_id)
    
    # Step 1: Set or update the category
    category_ref.set({
        "name": category_name,
        "description": category_description,
        "signCount": len(signs),
        "icon": category_icon,
        "levelId" : level_id
    }, merge=True)

    # Step 2: Collect current sign IDs in Firestore for this category
    existing_signs_query = db.collection("signs").where("categoryId", "==", custom_category_id).stream()
    existing_sign_ids = {sign.id for sign in existing_signs_query}

    # Step 3: Collect sign IDs from the input
    new_sign_ids = {sign["id"] for sign in signs if "id" in sign and sign["id"]}

    # Step 4: Delete signs that exist in Firestore but not in the new input
    signs_to_delete = existing_sign_ids - new_sign_ids
    for sign_id in signs_to_delete:
        db.collection("signs").document(sign_id).delete()

    # Step 5: Create or update new/modified signs
    for sign in signs:
        custom_sign_id = sign.get("id")
        sign_name = sign.get("name")
        sign_video_ref = sign.get("videoRef")
        sign_label = sign.get("label")

        if not custom_sign_id or not sign_name:
            continue

        sign_ref = db.collection("signs").document(custom_sign_id)
        sign_ref.set({
            "name": sign_name,
            "label": sign_label,
            "categoryId": custom_category_id,
            "videoRef": sign_video_ref
        }, merge=True)

    return custom_category_id


def create_all_categories():
    categoria_id = add_category_with_signs("categoryId01", "Alfabeto", "Aprende el abecedario en LSP y mejora tu habilidad para deletrear con señas.","hand", "levelId01", [
    {"id": "signId001", "name": "Letra A", "label":"a", "videoRef": "YKgCa1dwItA"},
    {"id": "signId002", "name": "Letra B", "label":"b", "videoRef": "nl5ghpTg5ec"},
    {"id": "signId003", "name": "Letra C", "label":"c", "videoRef": "H-anKSubm-w"},
    {"id": "signId004", "name": "Letra D", "label":"d", "videoRef": "r_Gs_Jbdl9E"},
    {"id": "signId005", "name": "Letra E", "label":"e", "videoRef": "youtube.com"},
    {"id": "signId006", "name": "Letra F", "label":"f", "videoRef": "youtube.com"}
    ])
    print(f"Categoría creada con ID: {categoria_id}")
    categoria_id = add_category_with_signs("categoryId02", "Colores", "Identifica y aprende los colores básicos para describir el mundo que te rodea.","palette", "levelId01", [
    {"id": "signId007", "name": "Verde", "label":"verde", "videoRef": "KmUUdxL4W7U"},
    {"id": "signId008", "name": "Rojo", "label":"rojo", "videoRef": "PUx8iIfwvDU"},
    {"id": "signId009", "name": "Amarillo", "label":"amarillo", "videoRef": "y1_EkCMMlhM"},
    {"id": "signId010", "name": "Blanco", "label":"blanco", "videoRef": "1s4aYoAodlc"},
    {"id": "signId011", "name": "Negro", "label":"negro", "videoRef": "60TK3s9V0nY"},
    {"id": "signId012", "name": "Azul", "label":"azul", "videoRef": "VC0csxuR34Q"}
    ])
    print(f"Categoría creada con ID: {categoria_id}")
    categoria_id = add_category_with_signs("categoryId03", "Familia", "Identifica y aprende los colores básicos para describir el mundo que te rodea.","palette", "levelId01", [
    ])
    print(f"Categoría creada con ID: {categoria_id}")
    




#@app.route('/')
#def index():
#    return render_template('index.html')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path != "" and os.path.exists(os.path.join("static/dist", path)):
        return send_from_directory("static/dist", path)
    else:
        return send_from_directory("static/dist", "index.html")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    images = data.get('frames')

    if not images or len(images) != 30:
        return jsonify({'error': 'Se requieren exactamente 30 frames'}), 400

    sequence = []

    for img_base64 in images:
        img_bytes = base64.b64decode(img_base64.split(',')[-1])
        np_arr = np.frombuffer(img_bytes, np.uint8)
        frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
        image_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        # Procesar con MediaPipe
        pose_result = pose.process(image_rgb)
        hands_result = hands.process(image_rgb)

        pose_vec = np.zeros((33, 4))
        if pose_result.pose_landmarks:
            for i, lm in enumerate(pose_result.pose_landmarks.landmark):
                pose_vec[i] = [lm.x, lm.y, lm.z, lm.visibility]

        left_hand = np.full((21, 3), -1.0)
        right_hand = np.full((21, 3), -1.0)

        if hands_result.multi_hand_landmarks and hands_result.multi_handedness:
            for idx, handedness in enumerate(hands_result.multi_handedness):
                label = handedness.classification[0].label
                coords = np.array([[lm.x, lm.y, lm.z] for lm in hands_result.multi_hand_landmarks[idx].landmark])
                if label == 'Left':
                    left_hand = coords
                else:
                    right_hand = coords

        features = np.concatenate([pose_vec.flatten(), left_hand.flatten(), right_hand.flatten()])
        sequence.append(features)

    try:
        input_array = np.expand_dims(np.array(sequence), axis=0)
        prediction = model.predict(input_array, verbose=0)[0]    
    except Exception as e:
        print(f"Prediction error: {e}")
        return jsonify({'error':'Prediction Failed'}),500
    

    predicted_index = int(np.argmax(prediction))
    
    UID_TEMP = data.get('uid')
    sign_ID = data.get('signId')
    sign_doc = db.collection('signs').document(sign_ID).get()
    current_sign_label = sign_doc.to_dict().get("label") # verde
    category_ID = sign_doc.to_dict().get("categoryId")

    reverse_label_map = {v: int(k) for k, v in labels.items()} #reverse labels to seach index by label
    target_index = reverse_label_map[current_sign_label]    
    probability = float(round(prediction[target_index] * 100, 2))
    
    result = {
        "probability": probability
    }
    
    sign_progress_probability = 0
    signProgress_query = (
        db.collection("signProgress")
        .where("uid", "==", UID_TEMP)
        .where("signId", "==", sign_ID)
        .limit(1)  # Limit to 1 since we expect only one result
    ).stream()
    sign_progress_item = next(signProgress_query,None)
    if sign_progress_item is not None and sign_progress_item.exists:
        sign_progress_probability = sign_progress_item.to_dict().get("progress")
        signProgress_doc = db.collection("signProgress").document(sign_progress_item.id)
    else:
        signProgress_doc = db.collection("signProgress").document()
    
    if sign_progress_probability > probability:
        return jsonify(result)
    
    
    signProgress_doc.set({
            "progress": probability,
            "signId": sign_ID,
            "uid": UID_TEMP,
            "categoryId": category_ID
        }, merge=True)
    
    if probability < 0.80:#PASAR LUEGO A BASE DE DATOS PARA NO CODIGO DURO
        return jsonify(result)

    
    
        


    #if current_sign_score > target_probability:
        
    


    #label_confidence = float(round(prediction[i] * 100, 2))

    #predicted_label = labels.get(str(predicted_index),'Desconocido')
    #confidence = {labels[str(i)]: float(round(prediction[i] * 100, 2)) for i in range(len(prediction))}

    #db.collection('predictions').add({
    #'label': predicted_label,
    #'confidence': confidence,
    #'timestamp': firestore.SERVER_TIMESTAMP
    #})

    #result = {
    #    labels[str(i)]: float(f"{p*100:.2f}") for i, p in enumerate(prediction)
    #}
    
    #print("prediction ",prediction)

    return jsonify(result)

@app.route('/get-sign-progress', methods=['GET'])
def get_sign_progress():
    uid = request.args.get('uid')
    category_id = request.args.get('categoryId')

    signProgress_query = (
        db.collection("signProgress")
        .where("uid", "==", uid)
        .where("categoryId", "==", category_id)
    ).stream()

    results = []

    for doc in signProgress_query:
        doc_data = doc.to_dict()
        results.append({
            "signId": doc_data.get("signId"),
            "progress": doc_data.get("progress")
        })

    #print(results)
    return jsonify(results)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=port)
    #app.run(debug=True, host='127.0.0.1', port=5000)
    
    #create_all_categories()
    
    

