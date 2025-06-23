'use client'

import { useState } from 'react'
import { Camera, ChevronRight, Loader2, Play, Trophy } from 'lucide-react'
import { DynamicIcon, IconName } from 'lucide-react/dynamic'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth, useCamera, useGetTestSigns, useLocationState, useTestPredictSign } from 'hooks'
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Progress } from 'components'
import { ROUTES } from 'lib/constants'
import { getProgress } from 'lib/utils'

type SignTestAnswer = {
  frames: string[]
  signId: string
}

export const SignTest = () => {
  const navigate = useNavigate()

  const locationState = useLocationState()

  const { user, loading } = useAuth()

  const uid = user?.uid

  const testPredictMutation = useTestPredictSign()

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [answers, setAnswers] = useState<SignTestAnswer[]>([])

  const [testCompleted, setTestCompleted] = useState(false)

  const testSignsQuery = useGetTestSigns(locationState?.levelId)

  const testSignsData = testSignsQuery.data || []

  const testPredictedData = testPredictMutation.data

  const handleNextQuestion = (
    frames: SignTestAnswer['frames'],
    signId: SignTestAnswer['signId']
  ) => {
    setAnswers(prevAnswers => [...prevAnswers, { frames, signId }])

    if (currentQuestion < testSignsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)

      return
    }

    const testPredictRequest = {
      answers: [...answers, { frames, signId }],
      uid,
    }

    testPredictMutation.mutate(testPredictRequest, {
      onSuccess: () => {
        setTestCompleted(true)
      },
    })
  }

  const { videoRef, isRecording, countdown, stream, cameraPermission, startCountdown } = useCamera(
    frames => {
      handleNextQuestion(frames, testSignsData[currentQuestion].id)
    }
  )

  const goBack = () => {
    navigate(-1)
  }

  const overallScore = testPredictedData?.overallScore || null

  const resultsData = testPredictedData?.results || []

  const mergedData = testSignsData.map(sign => {
    const result = resultsData.find(result => result.signId === sign.id)

    return {
      ...sign,
      ...result,
    }
  })

  const { textColor, approval, label } = getProgress(overallScore)

  const handleFinishTest = () => {
    if (approval) {
      navigate(ROUTES.DASHBOARD, { replace: true })

      return
    }

    goBack()
  }

  if (loading || testSignsQuery.isPending) {
    return null
  }

  if (testCompleted) {
    return (
      <main className="flex-1 p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Exámen Completado!</h1>
            <p className="text-gray-300">Aquí están tus resultados</p>
          </div>

          {/* Overall Score */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white text-center">Puntaje promedio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className={`text-6xl font-bold mb-2 ${textColor}`}>{overallScore}%</div>
                <p className={`text-lg ${textColor}`}>{label}</p>
              </div>
            </CardContent>
          </Card>

          {/* All Question Results */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Resultados del Exámen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mergedData.map((result, index) => (
                  <div
                    key={result.id}
                    className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-gray-400 font-medium">Pregunta {index + 1}</span>
                        <Badge
                          variant="outline"
                          className="min-w-max bg-rose-900/30 text-rose-400 border-rose-700"
                        >
                          {result.categoryName}
                        </Badge>
                      </div>
                      <p className="text-white font-medium mb-1">{result.question}</p>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <div className="text-right">
                        <div
                          className={`text-xl font-bold ${getProgress(result.probability).textColor}`}
                        >
                          {result.probability}%
                        </div>
                        <div className={`text-sm ${getProgress(result.probability).textColor}`}>
                          {getProgress(result.probability).rating}
                        </div>
                      </div>
                      <DynamicIcon
                        name={getProgress(result.probability).icon as IconName}
                        className={`h-5 w-5 ${getProgress(result.probability).textColor}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8 justify-center">
                <Button onClick={handleFinishTest} className="bg-violet-600 hover:bg-violet-700">
                  Terminar Exámen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="flex-1 p-6">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to={ROUTES.DASHBOARD} className="text-gray-400 hover:text-violet-400">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-600" />
          <button onClick={goBack} className="cursor-pointer text-gray-400 hover:text-violet-400">
            {locationState.difficulty}
          </button>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-600" />
          <span className="text-white font-medium">Exámen</span>
        </div>

        {/* Test Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-white">
              Exámen de Nivel {locationState.difficulty}
            </h1>
            <Badge className="bg-violet-900/30 text-violet-400 border-violet-700">
              Pregunta {currentQuestion + 1} de {testSignsData.length}
            </Badge>
          </div>
          <Progress
            color="bg-violet-600"
            value={((currentQuestion + 1) / testSignsData.length) * 100}
            className="bg-gray-700 h-2"
          />
        </div>

        {/* Current Question */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white text-xl mb-2">
                  {testSignsData[currentQuestion].question}
                </CardTitle>
                <p className="text-gray-300">
                  Presiona "Grabar Respuesta" cuando te encuentres listo.
                </p>
              </div>
              <Badge
                variant="outline"
                className="min-w-max bg-rose-900/30 text-rose-400 border-rose-700"
              >
                {testSignsData[currentQuestion].categoryName}
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Camera Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <Camera className="h-6 w-6  text-rose-400" />
                Graba tu respuesta
              </CardTitle>
              {!isRecording && !countdown && cameraPermission && testPredictMutation.isPending && (
                <Button
                  onClick={() => {
                    startCountdown()
                  }}
                  size="sm"
                  className="bg-violet-600 hover:bg-violet-700"
                >
                  <Play className="h-4 w-4" />
                  Grabar Respuesta
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
              {!stream && !countdown && !isRecording && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">
                      {cameraPermission
                        ? 'Haga clic en "Grabar Respuesta" para comenzar.'
                        : 'Se requiere permiso de la cámara'}
                    </p>
                  </div>
                </div>
              )}

              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {isRecording && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">REC</span>
                </div>
              )}

              {countdown > 0 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white animate-pulse">{countdown}</div>
                </div>
              )}

              {testPredictMutation.isPending && (
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                  <Loader2 className="h-12 w-12 text-violet-400 animate-spin mb-4" />
                  <p className="text-white text-lg">Calificando tu examen...</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
