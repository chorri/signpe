import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ROUTES } from 'lib/constants'

type LocationState = {
  levelId: string
  difficulty: string
  progress: number
}

export const useLocationState = () => {
  const locationState = useLocation()?.state as LocationState | null

  const navigate = useNavigate()

  React.useEffect(() => {
    if (!locationState) {
      navigate(ROUTES.DASHBOARD)

      return
    }
  }, [locationState])

  if (!locationState) {
    return null
  }

  return locationState
}
