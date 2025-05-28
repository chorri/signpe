import * as React from 'react'

import { useLogout } from 'hooks'
import { Button } from 'components'

export const Dashboard = () => {
  const logoutMutation = useLogout()

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <>
      <Button variant="destructive" onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </>
  )
}
