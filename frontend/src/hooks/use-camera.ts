import * as React from 'react'

export const useCamera = () => {
  const [isRecording, setIsRecording] = React.useState(false)

  const [countdown, setCountdown] = React.useState(0)

  const [stream, setStream] = React.useState<MediaStream | null>(null)

  const [cameraPermission, setCameraPermission] = React.useState(false)

  const videoRef = React.useRef<HTMLVideoElement>(null)

  const recordedChunks = React.useRef<Blob[]>([])

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
    if (!stream) {
      return
    }

    recordedChunks.current = []

    const recorder = new MediaRecorder(stream)

    recorder.ondataavailable = e => e.data.size > 0 && recordedChunks.current.push(e.data)

    recorder.onstop = () => {
      setIsRecording(false)

      stopCameraFeed()

      // Send data to API here
      const blob = new Blob(recordedChunks.current, { type: 'video/webm' })

      const formData = new FormData()

      formData.append('video', blob, 'practice.webm')
      // Example fetch:
      // await fetch('/api/your-endpoint', { method: 'POST', body: formData })
    }

    setIsRecording(true)

    recorder.start()

    setTimeout(() => recorder.stop(), 3000)
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

        if (active) setCameraPermission(true)
      })
      .catch(() => setCameraPermission(false))

    return () => {
      if (stream) stream.getTracks().forEach(track => track.stop())
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
