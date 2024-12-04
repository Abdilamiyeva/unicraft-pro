import {ReactNode} from 'react'

export interface LessonProps {
  open: boolean
  lessonName?: string
  side?: 'top' | 'bottom' | 'right' | 'left'
  close: () => void
  getFormtask: (values: {taskName: string; questions: Question[]}) => void
}

export interface Question {
  HintTrainer: string
  question: string
  number: number
  ball: number
  file: File[]
  id: string
}

export interface Task {
  taskName: string
  questions: Question[]
}
