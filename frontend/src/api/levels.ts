import { API_ROOT } from 'lib/constants'

export interface LevelsInterface {
  id: string
  title: string
  description: string
  difficulty: string
  lessons: string
  duration: string
  icon: string
  href: string
  available: boolean
  progress: number
}

export async function getLevels(uid: LevelsInterface['id']): Promise<LevelsInterface[]> {
  const params = new URLSearchParams({
    uid,
  })

  const response = await fetch(`${API_ROOT}get-levels?${params.toString()}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch prediction result')
  }

  return response.json() as Promise<LevelsInterface[]>
}
