import { useQuery } from '@tanstack/react-query'

import { getSigns, SignInterface } from 'api'

export const useGetSigns = (uid: string, categoryId: SignInterface['id']) => {
  return useQuery<SignInterface[]>({
    queryKey: ['signs', uid, categoryId],
    queryFn: () => getSigns(uid, categoryId),
    enabled: !!categoryId && !!uid,
  })
}
