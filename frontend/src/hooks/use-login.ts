import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { login } from 'api'

export const useLogin = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate('/dashboard')
    },
  })
}
