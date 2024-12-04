import {ReactNode} from 'react'

export interface LessonProps {
  open: boolean
  lessonName?: string
  side?: 'top' | 'bottom' | 'right' | 'left'
  close: () => void
  getForm: (values: {
    name: string
    description: string | ReactNode
    ball: number
    file: File | undefined
    files: File[]
  }) => void
}

export interface FormData {
  description: string
  name: string | undefined
  ball: number
  link?: string
}
