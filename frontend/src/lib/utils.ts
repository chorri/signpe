import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getProgress = (progress: number) => {
  if (progress >= 80) {
    return {
      color: 'bg-green-500',
      message: 'Excellent! Great job!',
      textColor: 'text-green-400',
      approval: true,
    }
  }

  if (progress >= 60) {
    return {
      color: 'bg-yellow-500',
      message: 'Good! Keep practicing!',
      textColor: 'text-yellow-400',
      approval: false,
    }
  }

  return {
    color: 'bg-red-500',
    message: 'Keep trying! You can do it!',
    textColor: 'text-red-400',
    approval: false,
  }
}
