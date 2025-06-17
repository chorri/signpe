import { useMutation } from '@tanstack/react-query'

import { PredictRequest, PredictResponse, setPredict } from 'api'

export const usePredictSign = () => {
  return useMutation<PredictResponse, unknown, PredictRequest>({
    mutationFn: setPredict,
  })
}
