import { BookOpen, Clock, Lock, LogOut, Play, Settings, Star, Trophy, User } from 'lucide-react'
import { Link, Navigate } from 'react-router-dom'

import { useAuth, useGetUser, useLogout } from 'hooks'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'components'
import { ROUTES } from 'lib/constants'

const courseData = [
  {
    id: 1,
    title: 'Foundation',
    description: 'Learn the basics of sign language and fundamental gestures',
    level: 'Introduction',
    lessons: 12,
    duration: '2 hours',
    progress: 0,
    available: true,
    icon: '🌟',
    color: 'violet',
  },
  {
    id: 2,
    title: 'Essentials',
    description: 'Build your vocabulary with common words and phrases',
    level: 'Basic',
    lessons: 24,
    duration: '6 hours',
    progress: 0,
    available: false,
    icon: '📚',
    color: 'rose',
  },
  {
    id: 3,
    title: 'Proficient',
    description: 'Practice conversations and complex sentence structures',
    level: 'Intermediate',
    lessons: 36,
    duration: '12 hours',
    progress: 0,
    available: false,
    icon: '💬',
    color: 'rose',
  },
  {
    id: 4,
    title: 'Expert',
    description: 'Master advanced techniques and cultural nuances',
    level: 'Advanced',
    lessons: 48,
    duration: '20 hours',
    progress: 0,
    available: false,
    icon: '🎓',
    color: 'rose',
  },
]

const capitalizeFirstLetterOnly = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const Dashboard = () => {
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

  console.log('userQuery.data', userQuery.data)

  const getUsername = () => {
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
          <span className="font-bold text-xl text-white">SignPe</span>
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-white">Welcome, {formattedUsername}</h2>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Alex Johnson" />
                  <AvatarFallback className="bg-violet-600 text-white">AJ</AvatarFallback>
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

      <main className="flex-1 p-6">
        <div className="container mx-auto max-w-6xl">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Your Learning Journey</h1>
            <p className="text-gray-300">
              Progress through our structured courses to master American Sign Language
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Total Progress</CardTitle>
                <Trophy className="h-4 w-4 text-violet-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">0%</div>
                <p className="text-xs text-gray-400">Start your first lesson</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Time Spent</CardTitle>
                <Clock className="h-4 w-4 text-rose-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">0h</div>
                <p className="text-xs text-gray-400">Begin learning today</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Streak</CardTitle>
                <Star className="h-4 w-4 text-violet-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">0 days</div>
                <p className="text-xs text-gray-400">Start your streak</p>
              </CardContent>
            </Card>
          </div>

          {/* Course Levels */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Course Levels</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {courseData.map(course => (
                <Card
                  key={course.id}
                  className={`relative transition-all duration-300 ${
                    course.available
                      ? 'bg-gray-800 border-gray-700 hover:border-violet-600 cursor-pointer'
                      : 'bg-gray-800/50 border-gray-700 opacity-60'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{course.icon}</div>
                        <div>
                          <CardTitle className="text-white">{course.title}</CardTitle>
                          <Badge
                            variant="outline"
                            className={`mt-1 ${
                              course.color === 'violet'
                                ? 'border-violet-600 text-violet-400'
                                : 'border-rose-600 text-rose-400'
                            }`}
                          >
                            {course.level}
                          </Badge>
                        </div>
                      </div>
                      {course.available ? (
                        <Play className="h-6 w-6 text-violet-400" />
                      ) : (
                        <Lock className="h-6 w-6 text-gray-500" />
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-300">
                      {course.description}
                    </CardDescription>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    {course.available ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-gray-400">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-violet-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <Button className="w-full mt-4 bg-violet-600 hover:bg-violet-700">
                          Start Learning
                        </Button>
                      </div>
                    ) : (
                      <Button disabled className="w-full mt-4">
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-6 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-violet-600 text-white p-1.5 rounded-lg mr-2">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="font-bold text-white">SignPe</span>
            </div>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-gray-400 hover:text-violet-400">
                Help Center
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-violet-400">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-violet-400">
                Terms of Service
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
