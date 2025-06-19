import { doc, getDoc } from 'firebase/firestore'

import { db } from 'lib/firebase'

export interface SignInterface {
  id: string
  name: string
  label: string
  categoryId: string
  videoRef: string
  progress: number
}

export interface SignWithCategoryName extends SignInterface {
  categoryName?: string
}

export async function getSign(uid: SignInterface['id']): Promise<SignWithCategoryName | null> {
  const signDoc = await getDoc(doc(db, 'signs', uid))

  const categoryId = signDoc.data().categoryId as SignInterface['categoryId']

  const categoryDoc = await getDoc(doc(db, 'categories', categoryId))

  const categoryName = categoryDoc.data().name as SignWithCategoryName['categoryName']

  return {
    id: signDoc.id,
    ...signDoc.data(),
    categoryName,
  } as SignWithCategoryName
}

export async function getSigns(
  uid: SignInterface['id'],
  categoryId: SignInterface['categoryId']
): Promise<SignInterface[]> {
  const params = new URLSearchParams({
    uid,
    categoryId,
  })

  const response = await fetch(`/get-signs?${params.toString()}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch prediction result')
  }

  return response.json() as Promise<SignInterface[]>
}
