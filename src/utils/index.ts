import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const formatNumber3Digits = (number: number) => {
  return number.toString().padStart(3, '0')
}

export const formatDecimalPoint = (number: number) => {
  return (number / 10).toFixed(1)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.includes('Firefox')
