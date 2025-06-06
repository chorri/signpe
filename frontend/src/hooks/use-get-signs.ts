import { useQuery } from '@tanstack/react-query'

import { getSigns, SignInterface } from 'api'

export const useGetSigns = (categoryId: SignInterface['id']) => {
  return useQuery<SignInterface[]>({
    queryKey: ['signs', categoryId],
    queryFn: () => getSigns(categoryId),
    enabled: !!categoryId,
  })
}
