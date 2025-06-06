import { useQuery } from '@tanstack/react-query'

import { getSign } from 'api'

export const useGetSign = (uid?: string) => {
  return useQuery({
    queryKey: ['sign', uid],
    queryFn: () => {
      if (!uid) throw new Error('Sign ID is required')

      return getSign(uid)
    },
    enabled: !!uid,
  })
}
