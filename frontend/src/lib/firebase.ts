import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import { FIREBASE_ENV } from './constants'

const firebaseConfig = {
  apiKey: FIREBASE_ENV.API_KEY,
  authDomain: FIREBASE_ENV.AUTH_DOMAIN,
  projectId: FIREBASE_ENV.PROJECT_ID,
  storageBucket: FIREBASE_ENV.STORAGE_BUCKET,
  messagingSenderId: FIREBASE_ENV.MESSAGING_SENDER_ID,
  appId: FIREBASE_ENV.APP_ID,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

export const googleProvider = new GoogleAuthProvider()
