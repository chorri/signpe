import { collection, getDocs } from 'firebase/firestore'

import { db } from 'lib/firebase'

export interface CategoryInterface {
  id: string
  name: string
  description: string
  icon: string
  signCount: number
}

export async function getCategories(): Promise<CategoryInterface[]> {
  const categoriesDocs = await getDocs(collection(db, 'categories'))

  return categoriesDocs.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as CategoryInterface[]
}
