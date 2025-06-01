import { useQuery } from '@tanstack/react-query'

import { getUser } from 'api'

export const useGetUser = (uid?: string) => {
  return useQuery({
    queryKey: ['user', uid],
    queryFn: () => {
      if (!uid) throw new Error('User ID is required')

      return getUser(uid)
    },
    enabled: !!uid,
  })
}
