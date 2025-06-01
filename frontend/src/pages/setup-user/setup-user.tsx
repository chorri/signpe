'use client'

import * as React from 'react'
import { Loader2 } from 'lucide-react'
import { Navigate } from 'react-router-dom'

import { useAuth, useGetUser, useSetupUsername } from 'hooks'
import { Button, Input, Label } from 'components'
import { ROUTES } from 'lib/constants'

export const SetupUser = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const [username, setUsername] = React.useState('')

  const setupUsername = useSetupUsername()

  const { user, loading } = useAuth()

  const userQuery = useGetUser(user?.uid)

  if (loading) {
    return null
  }

  if (userQuery.data !== null) {
    return <Navigate to={ROUTES.DASHBOARD} replace />
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    setupUsername.mutate(
      {
        uid: user.uid,
        username: username.trim(),
      },
      {
        onError: () => {
          setIsSubmitting(false)
        },
      }
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black relative flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">Finish your setup</h1>
          <p className="text-gray-400">Finish your setup to started with your journey</p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-lg border border-gray-800/50 shadow-2xl">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-2.5 transition-colors"
              disabled={!username || isSubmitting}
            >
              {isSubmitting && <Loader2 className="animate-spin" />}
              Finish Setup
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
