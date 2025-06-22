import { useMutation } from '@tanstack/react-query'

import { PredictTestRequest, PredictTestResponse, setTestPredict } from 'api'

export const useTestPredictSign = () => {
  return useMutation<PredictTestResponse, unknown, PredictTestRequest>({
    mutationFn: setTestPredict,
  })
}
