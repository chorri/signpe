import { useMutation } from '@tanstack/react-query'

import { getPredict, PredictRequest, PredictResponse } from 'api'

export const usePredictSign = () => {
  return useMutation<PredictResponse, unknown, PredictRequest>({
    mutationFn: getPredict,
  })
}
