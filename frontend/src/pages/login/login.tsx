import * as React from 'react'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useGoogleLogin, useLogin } from 'hooks'
import { Button, Input, Label, Separator } from 'components'
import { ROUTES } from 'lib/constants'

export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false)

  const [email, setEmail] = React.useState('')

  const [password, setPassword] = React.useState('')

  const loginMutation = useLogin()

  const loginWithGoogle = useGoogleLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    loginMutation.mutate({ email, password })
  }

  const handleGoogleLogin = () => {
    loginWithGoogle.mutate()
  }

  const renderGoogleIcon = () => {
    if (loginWithGoogle.isPending) {
      return <Loader2 className="animate-spin w-5 h-5 mr-2" />
    }

    return (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="currentColor"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="currentColor"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="currentColor"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black relative flex items-center justify-center p-4 overflow-hidden">
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
          <h1 className="text-3xl font-bold text-white">Bienvenido de Nuevo</h1>
          <p className="text-gray-400">Inicia sesión en tu cuenta para continuar</p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-lg border border-gray-800/50 shadow-2xl">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Correo
                </Label>
                <Input
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  placeholder="Ingresa tu correo"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-200">
                    Contraseña
                  </Label>
                  {/* <Link
                    to="/forgot-password"
                    className="text-sm text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    Forgot password?
                  </Link> */}
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Ingresa tu contraseña"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-2.5 transition-colors"
            >
              {loginMutation.isPending && <Loader2 className="animate-spin" />}
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-gray-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-900 px-2 text-gray-400"> O Continúa con Google</span>
              </div>
            </div>

            <Button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loginWithGoogle.isPending}
              variant="outline"
              className="w-full mt-4 bg-gray-800 border-gray-700 text-white hover:bg-gray-750 hover:border-gray-600 hover:text-violet-400 transition-colors"
            >
              {renderGoogleIcon()}
              Continuar con Google
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              {'¿No tienes una cuenta? '}
              <Link
                to={ROUTES.SIGN_UP}
                className="text-rose-400 hover:text-rose-300 font-medium transition-colors"
              >
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
