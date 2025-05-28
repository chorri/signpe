import { Navigate } from 'react-router-dom'

import { useAuth } from 'hooks'
import { ROUTES } from 'lib/constants'

type ProtectedRouteProps = {
  children: React.ReactNode
}

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children } = props

  const { user, loading } = useAuth()

  if (loading) {
    return null
  }

  if (!user) {
    return <Navigate to={ROUTES.HOME} replace />
  }

  return children
}
