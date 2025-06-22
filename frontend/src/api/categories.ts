import { API_ROOT } from 'lib/constants'

export interface CategoryInterface {
  id: string
  name: string
  description: string
  icon: string
  signCount: number
  levelId: string
  progress: number
}

export interface CategoriesInterface {
  categories: CategoryInterface[]
  canDoTest: boolean
}

export async function getCategories(
  uid: CategoryInterface['id'],
  levelId: CategoryInterface['levelId']
): Promise<CategoriesInterface> {
  const params = new URLSearchParams({
    uid,
    levelId,
  })

  const response = await fetch(`${API_ROOT}get-categories?${params.toString()}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch prediction result')
  }

  return response.json() as Promise<CategoriesInterface>
}
