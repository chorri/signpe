import { useQuery } from '@tanstack/react-query'

import { getLevels, LevelsInterface } from 'api'

export const useGetLevels = (uid: string) => {
  return useQuery<LevelsInterface[]>({
    queryKey: ['levels', uid],
    queryFn: () => getLevels(uid),
    enabled: !!uid,
  })
}
