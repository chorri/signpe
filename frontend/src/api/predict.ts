export async function getPredict(frames: string[]) {
  const response = await fetch('/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(frames),
  })

  if (!response.ok) {
    throw new Error('Prediction failed')
  }

  return response.json()
}
