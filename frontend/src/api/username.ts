import { doc, getDoc, setDoc } from 'firebase/firestore'

import { API_ROOT } from 'lib/constants'
import { db } from 'lib/firebase'

export interface SetupUsernameRequest {
  uid: string
  username: string
}

export async function setupUsername(setupUsernameRequest: SetupUsernameRequest): Promise<null> {
  const response = await fetch(`${API_ROOT}setup-user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(setupUsernameRequest),
  })

  if (!response.ok) {
    throw new Error('Prediction failed')
  }

  return null
}

export async function getUser(uid: string) {
  const userDoc = await getDoc(doc(db, 'users', uid))

  return userDoc.exists() ? userDoc.data() : null
}
