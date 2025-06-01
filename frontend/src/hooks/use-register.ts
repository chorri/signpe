import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { register } from 'api'
import { ROUTES } from 'lib/constants'

export const useRegister = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate(ROUTES.SETUP_USER)
    },
  })
}
