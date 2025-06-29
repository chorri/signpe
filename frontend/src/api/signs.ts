import { doc, getDoc } from 'firebase/firestore'

import { API_ROOT } from 'lib/constants'
import { db } from 'lib/firebase'

import { CategoryInterface } from './categories'

export interface SignInterface {
  id: string
  name: string
  label: string
  categoryId: string
  videoRef: string
  progress: number
}

export interface SignWithCategoryName extends SignInterface {
  categoryName: string
}

export interface SignTestInterface extends SignWithCategoryName {
  question: string
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

  const response = await fetch(`${API_ROOT}get-signs?${params.toString()}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch prediction result')
  }

  return response.json() as Promise<SignInterface[]>
}

export async function getTestSigns(
  levelId: CategoryInterface['levelId']
): Promise<SignTestInterface[]> {
  const params = new URLSearchParams({
    levelId,
  })

  const response = await fetch(`${API_ROOT}get-test-signs?${params.toString()}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch prediction result')
  }

  return response.json() as Promise<SignTestInterface[]>
}
