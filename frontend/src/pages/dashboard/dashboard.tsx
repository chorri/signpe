import { BookOpen, Clock, Lock, Play, Star, Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
    to: ROUTES.INTRODUCTION,
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
    to: '',
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
    to: '',
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
    to: '',
  },
]

export const Dashboard = () => {
  const navigate = useNavigate()

  const navigateTo = (id: number) => {
    const course = courseData.find(course => course.id === id)

    if (course && course.available) {
      navigate(course.to)
    }
  }

  return (
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
                onClick={() => navigateTo(course.id)}
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
                  <CardDescription className="text-gray-300">{course.description}</CardDescription>

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
                      <Button
                        className="w-full mt-4 bg-violet-600 hover:bg-violet-700"
                        onClick={() => navigateTo(course.id)}
                      >
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
      </div>
    </main>
  )
}
