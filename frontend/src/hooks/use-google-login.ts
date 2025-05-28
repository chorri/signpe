import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { googleLogin } from 'api'
import { ROUTES } from 'lib/constants'

export function useGoogleLogin() {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: googleLogin,
    onSuccess: () => {
      navigate(ROUTES.DASHBOARD)
    },
  })
}
