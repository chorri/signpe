import { Navigate } from 'react-router-dom'

import { useAuth } from 'hooks'
import { ROUTES } from 'lib/constants'

type PublicdRouteProps = {
  children: React.ReactNode
}

export const PublicRoute = (props: PublicdRouteProps) => {
  const { children } = props

  const { user, loading } = useAuth()

  if (loading) {
    return null
  }

  if (user) {
    return <Navigate to={ROUTES.DASHBOARD} replace />
  }

  return children
}
