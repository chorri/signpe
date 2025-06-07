import { useMutation } from '@tanstack/react-query'

import { getPredict } from 'api'

export const usePredictSign = () => {
  return useMutation({
    mutationFn: getPredict,
  })
}
