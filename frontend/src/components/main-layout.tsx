import { BookOpen, LogOut } from 'lucide-react'
import { Link, Navigate, Outlet } from 'react-router-dom'

import { useAuth, useGetUser, useLogout } from 'hooks'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'components'
import { ROUTES } from 'lib/constants'

export const MainLayout = () => {
  const { user, loading } = useAuth()

  const userQuery = useGetUser(user?.uid)

  const logoutMutation = useLogout()

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  if (loading || userQuery.isLoading) {
    return null
  }

  if (userQuery.data === null) {
    return <Navigate to={ROUTES.SETUP_USER} replace />
  }

  const getUsername = () => {
    if (!userQuery.data?.username) return ''

    const username = String(userQuery.data.username)

    return username.charAt(0).toUpperCase() + username.slice(1)
  }

  const formattedUsername = getUsername()

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" to="/">
          <div className="bg-violet-600 text-white p-2 rounded-lg mr-2">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="font-bold text-xl text-white">SignPE</span>
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-white">
              Te damos la bienvenida, {formattedUsername}
            </h2>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Alex Johnson" />
                  <AvatarFallback className="bg-violet-600 text-white">Foto</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-gray-800 border-gray-700"
              align="end"
              forceMount
            >
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium text-white">{formattedUsername}</p>
                  <p className="w-[200px] truncate text-sm text-gray-400">{user.email}</p>
                </div>
              </div>
              <DropdownMenuSeparator className="bg-gray-700" />
              {/* <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" /> */}
              <DropdownMenuItem
                className="text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <Outlet />

      {/* Simple Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-6 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-violet-600 text-white p-1.5 rounded-lg mr-2">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="font-bold text-white">SignPE</span>
            </div>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-gray-400 hover:text-violet-400">
                Centro de Ayuda
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-violet-400">
                Politica de Privacidad
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-violet-400">
                Terminos de Servicio
              </Link>
            </div>
            <div className="text-sm text-gray-400 mt-4 md:mt-0">
              © {new Date().getFullYear()} SignPe. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
