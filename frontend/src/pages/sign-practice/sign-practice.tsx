'use client'

import * as React from 'react'
import { Camera, CheckCircle2, ChevronRight, Loader2, Play } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { useAuth, useCamera, useGetSign, useLocationState, usePredictSign } from 'hooks'
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Progress } from 'components'
import { ROUTES } from 'lib/constants'
import { getProgress } from 'lib/utils'

export const SignPractice = () => {
  const { signId } = useParams()

  const navigate = useNavigate()

  const signQuery = useGetSign(signId)

  const { user, loading } = useAuth()

  const uid = user?.uid

  const predictMutation = usePredictSign()

  const locationState = useLocationState()

  const [progress, setProgress] = React.useState<number | null>(null)

  const { videoRef, isRecording, countdown, stream, cameraPermission, startCountdown } = useCamera(
    frames => {
      predictMutation.mutate({ frames, signId, uid })
    }
  )

  const signData = signQuery.data

  const predictedData = predictMutation.data

  const goBack = () => {
    navigate(-1)
  }

  React.useEffect(() => {
    if (!predictedData || typeof predictedData.probability !== 'number') {
      return
    }

    const value = predictedData.probability

    setProgress(Math.round(Number(value)))
  }, [predictedData])

  if (signQuery.isPending || loading) {
    return null
  }

  const { color, message, textColor, approval } = getProgress(progress)

  return (
    <main className="flex-1 p-6">
      <div className="container mx-auto max-w-7xl">
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
          <span className="text-white font-medium">{signData.name}</span>
        </div>

        {/* Practice Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Badge
              variant="outline"
              className="min-w-max bg-rose-900/30 text-rose-400 border-rose-700"
            >
              Categoría: {signData.categoryName}
            </Badge>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Práctica: {signData.name}</h1>
          <p className="text-gray-300">
            Observa atentamente el video, cuando estés listo dale a empezar y repite la seña.
          </p>
        </div>

        {/* Main Practice Area */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Reference Video */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2 leading-8">
                <Play className="h-6 w-6 text-violet-400" />
                Video de Referencia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${signData.videoRef}`}
                  title="ASL Sign Reference"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Camera Practice */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center gap-2 leading-8">
                  <Camera className="h-6 w-6  text-rose-400" />
                  Tu Práctica
                </CardTitle>
                {!isRecording && !countdown && !predictMutation.isPending && cameraPermission && (
                  <Button
                    onClick={() => {
                      startCountdown()
                    }}
                    size="sm"
                    className="bg-violet-600 hover:bg-violet-700"
                  >
                    <Play className="h-4 w-4" />
                    Iniciar Práctica
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                {!stream && !countdown && !isRecording && !predictMutation.isPending && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400">
                        {cameraPermission
                          ? 'Haga clic en "Iniciar Práctica" para comenzar.'
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

                {/* Recording Indicator */}
                {isRecording && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">REC</span>
                  </div>
                )}

                {/* Countdown Overlay */}
                {countdown > 0 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white animate-pulse">{countdown}</div>
                  </div>
                )}

                {/* Loading Overlay */}
                {predictMutation.isPending && (
                  <div className="absolute inset-0 bg-black flex flex-col items-center justify-center">
                    <Loader2 className="h-12 w-12 text-violet-400 animate-spin mb-4" />
                    <p className="text-white text-lg">Analizando tu seña...</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Puntaje de Desempeño</CardTitle>
          </CardHeader>
          <CardContent>
            {progress !== null ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Precisión</span>
                  <span className="text-white font-semibold">{progress}%</span>
                </div>
                <Progress color={color} value={progress} className="bg-gray-700 h-3" />

                <div className="flex items-center gap-2">
                  {approval && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                  <p className={`font-medium ${textColor}`}>{message}</p>
                </div>
                {approval && (
                  <div className="mt-4">
                    <Button onClick={goBack} className="bg-green-700 hover:bg-green-800">
                      <CheckCircle2
                        style={{
                          width: 'auto',
                          height: '20px',
                        }}
                      />
                      Terminar Práctica
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400">Completa una práctica para ver tu desempeño</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
