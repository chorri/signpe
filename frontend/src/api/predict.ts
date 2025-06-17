export interface PredictResponse {
  probability: number
}

export interface PredictRequest {
  frames: string[]
  signId: string
  uid: string
}

export async function getPredict(predictRequest: PredictRequest): Promise<PredictResponse> {
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
