import * as React from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth, useGetUser, useLogout } from 'hooks'
import { Button } from 'components'
import { ROUTES } from 'lib/constants'

export const Dashboard = () => {
  const { user, loading } = useAuth()

  const userQuery = useGetUser(user?.uid)

  const logoutMutation = useLogout()

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  if (loading || userQuery.isLoading) {
    return null
  }

  if (userQuery.data === null) {
    return <Navigate to={ROUTES.SETUP_USER} replace />
  }

  return (
    <>
      <Button variant="destructive" onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </>
  )
}
