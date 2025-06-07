import * as React from 'react'

export const useCamera = (onRecordingFinished?: (frames: string[]) => void) => {
  const [isRecording, setIsRecording] = React.useState(false)

  const [countdown, setCountdown] = React.useState(0)

  const [stream, setStream] = React.useState<MediaStream | null>(null)

  const [cameraPermission, setCameraPermission] = React.useState(false)

  const videoRef = React.useRef<HTMLVideoElement>(null)

  const isLoading = false

  const progress = 0

  const startCameraFeed = React.useCallback(async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 480 },
      audio: false,
    })

    setStream(mediaStream)

    if (videoRef.current) videoRef.current.srcObject = mediaStream
  }, [])

  const stopCameraFeed = React.useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())

      setStream(null)

      if (videoRef.current) {
        videoRef.current.srcObject = null
      }
    }
  }, [stream])

  const startRecording = React.useCallback(() => {
    if (!stream || !videoRef.current) {
      return
    }

    setIsRecording(true)

    const canvas = document.createElement('canvas')

    canvas.width = 640

    canvas.height = 480

    const ctx = canvas.getContext('2d')

    const images: string[] = []

    const maxFrames = 30

    let framesCaptured = 0

    const interval = setInterval(() => {
      if (!videoRef.current || !ctx) {
        return
      }

      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)

      const base64 = canvas.toDataURL('image/jpeg')

      images.push(base64)

      framesCaptured++

      const finalize = () => {
        while (images.length < maxFrames) {
          images.push(images[images.length - 1])
        }

        setIsRecording(false)

        stopCameraFeed()

        if (onRecordingFinished) {
          onRecordingFinished(images)
        }
      }

      if (framesCaptured >= maxFrames) {
        clearInterval(interval)

        finalize()
      }
    }, 100)
  }, [stream, stopCameraFeed])

  const startCountdown = React.useCallback(async () => {
    await startCameraFeed()

    setCountdown(3)

    const interval = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) {
          clearInterval(interval)

          return 0
        }

        return c - 1
      })
    }, 1000)
  }, [startCameraFeed])

  React.useEffect(() => {
    const active = true

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(mediaStream => {
        mediaStream.getTracks().forEach(track => track.stop())

        if (active) {
          setCameraPermission(true)
        }
      })
      .catch(() => setCameraPermission(false))

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  React.useEffect(() => {
    if (countdown === 0 && stream && !isRecording) {
      startRecording()
    }
  }, [countdown, stream, isRecording, startRecording])

  return {
    progress,
    videoRef,
    isRecording,
    isLoading,
    countdown,
    stream,
    cameraPermission,
    startCountdown,
  }
}
