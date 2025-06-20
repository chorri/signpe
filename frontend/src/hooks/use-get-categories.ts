import { useQuery } from '@tanstack/react-query'

import { CategoryInterface, getCategories } from 'api'

export const useGetCategories = (uid: string, levelId: CategoryInterface['levelId']) => {
  return useQuery<CategoryInterface[]>({
    queryKey: ['categories', uid, levelId],
    queryFn: () => getCategories(uid, levelId),
    enabled: !!levelId && !!uid,
  })
}
