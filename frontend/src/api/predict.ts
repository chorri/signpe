interface Predict {
  frames: string[]
  signId: string
}

export interface PredictRequest extends Predict {
  uid: string
}

export interface PredictResponse {
  probability: number
  signId?: string
}

export interface PredictTestRequest {
  answers: Predict[]
  uid: string
}

export interface PredictTestResponse {
  results: PredictResponse[]
  overallScore: number
}

export async function setPredict(predictRequest: PredictRequest): Promise<PredictResponse> {
  const response = await fetch('/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(predictRequest),
  })

  if (!response.ok) {
    throw new Error('Prediction failed')
  }

  return response.json() as Promise<PredictResponse>
}

export async function setTestPredict(
  predictRequest: PredictTestRequest
): Promise<PredictTestResponse> {
  const response = await fetch('/test-predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(predictRequest),
  })

  if (!response.ok) {
    throw new Error('Prediction failed')
  }

  return response.json() as Promise<PredictTestResponse>
}
