import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { login } from 'api'
import { ROUTES } from 'lib/constants'

export const useLogin = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate(ROUTES.DASHBOARD)
    },
  })
}
