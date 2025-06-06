import * as React from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'

import { auth } from 'lib/firebase'

type AuthContextType = {
  user: User | null
  loading: boolean
}

export const AuthContext = React.createContext<AuthContextType>({ user: null, loading: true })

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null)

  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}
