import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from 'lib/firebase'

export async function register({ email, password }: { email: string; password: string }) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)

  return userCredential.user
}
