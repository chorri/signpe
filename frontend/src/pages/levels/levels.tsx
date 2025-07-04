'use client'

import * as React from 'react'
import { BookOpenText, CheckCircle2, ChevronDown, ChevronRight, LockKeyhole } from 'lucide-react'
import { DynamicIcon, IconName } from 'lucide-react/dynamic'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { useAuth, useGetCategories, useGetSigns, useLocationState } from 'hooks'
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

export const Levels = () => {
  const navigate = useNavigate()

  const { levelId: levelHref } = useParams()

  const locationState = useLocationState()

  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null)

  const { user, loading } = useAuth()

  const uid = user?.uid

  const categoriesQuery = useGetCategories(uid, locationState?.levelId)

  const signsQuery = useGetSigns(uid, expandedCategory)

  const categoriesData = categoriesQuery.data?.categories || []

  const canDoTest = categoriesQuery.data?.canDoTest || false

  const signsData = signsQuery.data || []

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  const handleSignClick = (signId: string) => {
    navigate(`/${levelHref}/${signId}`, {
      state: locationState,
    })
  }

  const handleExamClick = () => {
    if (!canDoTest) {
      return
    }

    navigate(`/${levelHref}${ROUTES.TEST}`, {
      state: locationState,
    })
  }

  if (categoriesQuery.isPending || loading) {
    return null
  }

  return (
    <main className="flex-1 p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/dashboard" className="text-gray-400 hover:text-violet-400">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-600" />
          <span className="text-white font-medium">{locationState.difficulty}</span>
        </div>

        {/* Level Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Nivel {locationState.difficulty} del Lenguaje de Señas Peruano (LSP)
          </h1>
          <p className="text-gray-300 max-w-3xl">
            Empieza tu aventura en el lenguaje de señas peruano. Haz click en cualquier categoría
            para explorar las señas y comenzar a aprender.
          </p>
        </div>

        {/* Categories List */}
        <div className="space-y-4">
          <Card
            className={`bg-gray-800 border-gray-700 ${canDoTest ? 'border-gray-400 hover:border-gray-200 transition-all duration-300 cursor-pointer' : 'cursor-not-allowed'}`}
            onClick={handleExamClick}
          >
            <CardHeader className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-gray-900 text-gray-400">
                    {canDoTest ? (
                      <BookOpenText className="h-8 w-8" />
                    ) : (
                      <LockKeyhole className="h-8 w-8" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">Examen</CardTitle>
                    <CardDescription className="text-gray-400">
                      Completa todas las categorias para desbloquear el examen.
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      disabled={!canDoTest}
                      className="min-w-max bg-gray-900 border-gray-400 text-gray-400 hover:bg-gray-900/50 hover:text-gray-300 hover:border-gray-300"
                      onClick={handleExamClick}
                    >
                      {canDoTest ? <BookOpenText /> : <LockKeyhole />}
                      Ir al examen
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
          {categoriesData.map((category, index) => (
            <div key={category.id} className="space-y-2">
              {/* Category Header */}
              <Card
                className="bg-gray-800 border-gray-700 hover:border-violet-600 transition-all duration-300 cursor-pointer"
                onClick={() => toggleCategory(category.id)}
              >
                <CardHeader className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2 rounded-lg ${
                          index % 2 === 0
                            ? 'bg-violet-900/30 text-violet-400'
                            : 'bg-rose-900/30 text-rose-400'
                        }`}
                      >
                        <DynamicIcon name={category.icon as IconName} className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{category.name}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={`min-w-max ${
                            index % 2 === 0
                              ? 'bg-violet-900/30 border-violet-700 text-violet-400'
                              : 'bg-rose-900/30 border-rose-700 text-rose-400'
                          }`}
                        >
                          {`Completado ${category.progress}/${category.signCount} Señas`}
                        </Badge>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                          expandedCategory === category.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Expanded Subcategories */}
              {expandedCategory === category.id && (
                <div className="ml-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
                  {signsData.map((sign, index) => (
                    <Card
                      key={sign.id}
                      onClick={() => handleSignClick(sign.id)}
                      className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                    >
                      <CardContent className="py-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8">
                              {sign.progress >= 80 ? (
                                <CheckCircle2 className="h-6 w-6 text-green-500" />
                              ) : (
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-gray-300 text-sm font-medium">
                                  {index + 1}
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-medium mb-1">{sign.name}</h4>
                              <div className="flex items-center gap-2">
                                <div className="w-32 bg-gray-700 rounded-full h-1.5">
                                  <div
                                    className="bg-violet-600 h-1.5 rounded-full transition-all duration-300"
                                    style={{ width: `${Math.round(sign.progress)}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-400">
                                  {Math.round(sign.progress)}%
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleSignClick(sign.id)}
                            type="button"
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 hover:bg-violet-600/20"
                          >
                            <ChevronRight className="h-4 w-4 text-violet-400" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
