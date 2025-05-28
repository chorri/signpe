import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { logout } from 'api'
import { ROUTES } from 'lib/constants'

export const useLogout = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate(ROUTES.HOME)
    },
  })
}
