import { useMutation } from '@tanstack/react-query'

import { getPredict, PredictResponse } from 'api'

export const usePredictSign = () => {
  return useMutation<PredictResponse, unknown, string[]>({
    mutationFn: getPredict,
  })
}
