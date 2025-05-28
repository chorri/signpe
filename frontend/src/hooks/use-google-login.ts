import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { googleLogin } from 'api/google-login'

export function useGoogleLogin() {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: googleLogin,
    onSuccess: () => {
      navigate('/dashboard')
    },
  })
}
