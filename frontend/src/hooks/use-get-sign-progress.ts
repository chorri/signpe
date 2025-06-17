import { useQuery } from '@tanstack/react-query'

import { getSignProgress, SignInterface, SignScoreInterface } from 'api'

export const useSignProgress = (uid: string, categoryId: SignInterface['id']) => {
  return useQuery<SignScoreInterface[]>({
    queryKey: ['signs', categoryId],
    queryFn: () => getSignProgress(uid, categoryId),
    enabled: !!categoryId && !!uid,
  })
}
