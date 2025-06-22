import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getProgress = (progress: number) => {
  if (progress >= 80) {
    return {
      color: 'bg-green-500',
      message: '¡Excelente! ¡Buen trabajo!',
      textColor: 'text-green-400',
      approval: true,
      icon: 'check-circle-2',
      label: '¡Aprobado!',
      rating: 'Correcto',
    }
  }

  if (progress >= 50) {
    return {
      color: 'bg-yellow-500',
      message: '¡Falta poco! ¡Continúa practicando!',
      textColor: 'text-yellow-400',
      approval: false,
      icon: 'x-circle',
      label: '¡Falta poco!',
      rating: 'Buen intento',
    }
  }

  return {
    color: 'bg-red-500',
    message: '¡No te rindas! ¡Tu puedes lograrlo!',
    textColor: 'text-red-400',
    approval: false,
    icon: 'x-circle',
    label: '¡Continúa practicando!',
    rating: 'Incorrecto',
  }
}
