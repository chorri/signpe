import { doc, getDoc, setDoc } from 'firebase/firestore'

import { db } from 'lib/firebase'

export async function setupUsername({ uid, username }: { uid: string; username: string }) {
  await setDoc(doc(db, 'users', uid), {
    uid: uid,
    username: username,
  })
}

export async function getUser(uid: string) {
  const userDoc = await getDoc(doc(db, 'users', uid))

  return userDoc.exists() ? userDoc.data() : null
}
