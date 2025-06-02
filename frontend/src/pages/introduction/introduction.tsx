'use client'

import { useState } from 'react'
import {
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Hand,
  Hash,
  HelpCircle,
  MessageSquare,
  Smile,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'components'

export const Introduction = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null)

  const categories = [
    {
      id: 1,
      title: 'Alphabet Basics',
      description: 'Learn the ASL alphabet and practice fingerspelling',
      lessons: 26,
      progress: 0,
      icon: Hand,
      color: 'violet',
      subcategories: [
        { id: 1, name: 'Letter A', completed: true, progress: 100 },
        { id: 2, name: 'Letter B', completed: true, progress: 100 },
        { id: 3, name: 'Letter C', completed: true, progress: 100 },
        { id: 4, name: 'Letter D', completed: false, progress: 65 },
        { id: 5, name: 'Letter E', completed: false, progress: 30 },
        { id: 6, name: 'Letter F', completed: false, progress: 0 },
      ],
    },
    {
      id: 2,
      title: 'Greetings & Introductions',
      description: 'Learn how to introduce yourself and greet others',
      lessons: 8,
      progress: 0,
      icon: Smile,
      color: 'rose',
      subcategories: [
        { id: 1, name: 'Hello', completed: true, progress: 100 },
        { id: 2, name: 'Goodbye', completed: true, progress: 100 },
        { id: 3, name: 'Nice to meet you', completed: false, progress: 45 },
        { id: 4, name: 'My name is', completed: false, progress: 20 },
        { id: 5, name: 'How are you?', completed: false, progress: 0 },
        { id: 6, name: "I'm fine", completed: false, progress: 0 },
      ],
    },
    {
      id: 3,
      title: 'Numbers & Counting',
      description: 'Master numbers 1-20 and basic counting in ASL',
      lessons: 20,
      progress: 0,
      icon: Hash,
      color: 'violet',
      subcategories: [
        { id: 1, name: 'Number 1', completed: false, progress: 0 },
        { id: 2, name: 'Number 2', completed: false, progress: 0 },
        { id: 3, name: 'Number 3', completed: false, progress: 0 },
        { id: 4, name: 'Number 4', completed: false, progress: 0 },
        { id: 5, name: 'Number 5', completed: false, progress: 0 },
        { id: 6, name: 'Number 6', completed: false, progress: 0 },
      ],
    },
    {
      id: 4,
      title: 'Basic Questions',
      description: 'Learn to ask and answer simple questions',
      lessons: 10,
      progress: 0,
      icon: HelpCircle,
      color: 'rose',
      subcategories: [
        { id: 1, name: 'What?', completed: false, progress: 0 },
        { id: 2, name: 'Where?', completed: false, progress: 0 },
        { id: 3, name: 'When?', completed: false, progress: 0 },
        { id: 4, name: 'Who?', completed: false, progress: 0 },
        { id: 5, name: 'Why?', completed: false, progress: 0 },
        { id: 6, name: 'How?', completed: false, progress: 0 },
      ],
    },
    {
      id: 5,
      title: 'Common Expressions',
      description: 'Everyday phrases and expressions in ASL',
      lessons: 12,
      progress: 0,
      icon: MessageSquare,
      color: 'violet',
      subcategories: [
        { id: 1, name: 'Please', completed: false, progress: 0 },
        { id: 2, name: 'Thank you', completed: false, progress: 0 },
        { id: 3, name: "You're welcome", completed: false, progress: 0 },
        { id: 4, name: 'Excuse me', completed: false, progress: 0 },
        { id: 5, name: "I'm sorry", completed: false, progress: 0 },
        { id: 6, name: 'Help', completed: false, progress: 0 },
      ],
    },
    {
      id: 6,
      title: 'Practice Conversations',
      description: 'Put it all together with guided conversations',
      lessons: 6,
      progress: 0,
      icon: Users,
      color: 'rose',
      subcategories: [
        { id: 1, name: 'Introducing Yourself', completed: false, progress: 0 },
        { id: 2, name: 'Asking for Help', completed: false, progress: 0 },
        { id: 3, name: 'Basic Small Talk', completed: false, progress: 0 },
        { id: 4, name: 'Ordering Food', completed: false, progress: 0 },
        { id: 5, name: 'Asking Directions', completed: false, progress: 0 },
        { id: 6, name: 'Meeting New People', completed: false, progress: 0 },
      ],
    },
  ]

  const toggleCategory = (categoryId: number) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  const getCompletedCount = (
    subcategories: { id: number; name: string; completed: boolean; progress: number }[]
  ) => {
    return subcategories.filter(sub => sub.completed).length
  }

  return (
    <main className="flex-1 p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link to="/dashboard" className="text-gray-400 hover:text-violet-400">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-600" />
          <span className="text-white font-medium">Introduction</span>
        </div>

        {/* Level Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Introduction to Sign Language</h1>
          <p className="text-gray-300 max-w-3xl">
            Begin your journey into American Sign Language. Click on any category below to explore
            the individual signs and start learning.
          </p>
        </div>

        {/* Categories List */}
        <div className="space-y-4">
          {categories.map(category => (
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
                          category.color === 'violet'
                            ? 'bg-violet-900/30 text-violet-400'
                            : 'bg-rose-900/30 text-rose-400'
                        }`}
                      >
                        <category.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{category.title}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={`${
                            category.color === 'violet'
                              ? 'border-violet-600 text-violet-400'
                              : 'border-rose-600 text-rose-400'
                          }`}
                        >
                          {getCompletedCount(category.subcategories)}/
                          {category.subcategories.length} signs resolved
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
                  {category.subcategories.map(subcategory => (
                    <Card
                      key={subcategory.id}
                      className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                    >
                      <CardContent className="py-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8">
                              {subcategory.completed ? (
                                <CheckCircle2 className="h-6 w-6 text-green-500" />
                              ) : (
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-gray-300 text-sm font-medium">
                                  {subcategory.id}
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-medium mb-1">{subcategory.name}</h4>
                              <div className="flex items-center gap-2">
                                <div className="w-32 bg-gray-700 rounded-full h-1.5">
                                  <div
                                    className="bg-violet-600 h-1.5 rounded-full transition-all duration-300"
                                    style={{ width: `${subcategory.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-400">
                                  {subcategory.progress}%
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button
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
