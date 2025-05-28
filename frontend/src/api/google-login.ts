import { signInWithPopup } from 'firebase/auth'

import { auth, googleProvider } from 'lib/firebase'

export async function googleLogin() {
  const userCredential = await signInWithPopup(auth, googleProvider)

  return userCredential.user
}
