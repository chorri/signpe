import { collection, getDocs, query, where } from 'firebase/firestore'

import { db } from 'lib/firebase'

export interface SignInterface {
  id: string
  name: string
  categoryId: string
  videoRef: string
}

export async function getSigns(categoryId: SignInterface['categoryId']): Promise<SignInterface[]> {
  const signsQuery = query(collection(db, 'signs'), where('categoryId', '==', categoryId))

  const signsDocs = await getDocs(signsQuery)

  return signsDocs.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as SignInterface[]
}
