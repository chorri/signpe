import { useQuery } from '@tanstack/react-query'

import { CategoryInterface, getCategories } from 'api'

export const useGetCategories = () => {
  return useQuery<CategoryInterface[]>({
    queryKey: ['categories'],
    queryFn: () => {
      return getCategories()
    },
  })
}
