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
    title: 'Nivel Básico',
    description: 'Aprende señas básicas del lenguaje de señas y aprende el alfabeto dactilológico',
    level: 'Básico',
    lessons: 20,
    duration: '0 horas',
    progress: 0,
    available: true,
    icon: '🌟',
    color: 'violet',
    to: ROUTES.BASIC,
  },
  {
    id: 2,
    title: 'Nivel Intermedio',
    description: 'Enriquece tu vocabulario con palabras y frases comunes para usar en el día a día',
    level: 'Intermedio',
    lessons: 24,
    duration: '0 horas',
    progress: 0,
    available: false,
    icon: '📚',
    color: 'rose',
    to: '',
  },
  {
    id: 3,
    title: 'Nivel Avanzado',
    description:
      'Refuerza tus habilidades para construir oraciones complejas y comunicarte con mayor precisión',
    level: 'Avanzado',
    lessons: 20,
    duration: '0 horas',
    progress: 0,
    available: false,
    icon: '💬',
    color: 'violet',
    to: '',
  },
  {
    id: 4,
    title: 'Nivel Experto',
    description:
      'Perfecciona tu conocimiento para interpretar conversaciones a tiempo real y participar en presentaciones formales',
    level: 'Experto',
    lessons: 20,
    duration: '0 horas',
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
          <h1 className="text-3xl font-bold text-white mb-2">Tu camino de aprendizaje</h1>
          <p className="text-gray-300">
            Avanza a través de nuestros niveles estructurados para dominar el Lenguaje de Señas
            Peruano (LSP)
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Progreso Total</CardTitle>
              <Trophy className="h-4 w-4 text-violet-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">0%</div>
              <p className="text-xs text-gray-400">Inicia tu primer nivel</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                Tiempo en Prácticas
              </CardTitle>
              <Clock className="h-4 w-4 text-rose-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">0h</div>
              <p className="text-xs text-gray-400">Inicia tu primera práctica</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Racha de Días</CardTitle>
              <Star className="h-4 w-4 text-violet-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">0 días</div>
              <p className="text-xs text-gray-400">Inicia tu racha</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Levels */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Selección de Nivel</h2>
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
                      <span>{course.lessons} señas</span>
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
                        type="button"
                        className="w-full mt-4 bg-violet-600 hover:bg-violet-700"
                        onClick={() => navigateTo(course.id)}
                      >
                        Empieza a Aprender
                      </Button>
                    </div>
                  ) : (
                    <Button type="button" disabled className="w-full mt-4">
                      Próximamente
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
