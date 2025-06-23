import { useQuery } from '@tanstack/react-query'

import { CategoryInterface, getTestSigns, SignTestInterface } from 'api'

export const useGetTestSigns = (levelId: CategoryInterface['levelId']) => {
  return useQuery<SignTestInterface[]>({
    queryKey: ['signs', 'test', levelId],
    queryFn: () => getTestSigns(levelId),
    enabled: !!levelId,
    refetchOnWindowFocus: false,
  })
}
