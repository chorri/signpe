import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'

import { db } from 'lib/firebase'

export interface SignInterface {
  id: string
  name: string
  label: string
  categoryId: string
  videoRef: string
}

export interface SignWithCategoryName extends SignInterface {
  categoryName?: string
}

export interface SignScoreInterface {
  signId: string
  progress: number
}

export async function getSigns(categoryId: SignInterface['categoryId']): Promise<SignInterface[]> {
  const signsQuery = query(collection(db, 'signs'), where('categoryId', '==', categoryId))

  const signsDocs = await getDocs(signsQuery)

  return signsDocs.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as SignInterface[]
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

export async function getSignProgress(
  uid: string,
  categoryId: SignInterface['categoryId']
): Promise<SignScoreInterface[]> {
  const params = new URLSearchParams({
    uid,
    categoryId,
  })

  const response = await fetch(`/get-sign-progress?${params.toString()}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch prediction result')
  }

  return response.json() as Promise<SignScoreInterface[]>
}
