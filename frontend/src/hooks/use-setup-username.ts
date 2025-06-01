import { useMutation, useQueryClient } from '@tanstack/react-query'

import { setupUsername } from 'api'

export const useSetupUsername = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: setupUsername,
    onSuccess: (_, { uid }) => {
      queryClient.invalidateQueries({ queryKey: ['user', uid] })
    },
  })
}
