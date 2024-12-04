import {ReactNode} from 'react'

export interface CreateQuestionProps {
  addQuestion: () => void
  deleteQuestion: () => void
  setTask: Dispatch<SetStateAction<Task>>
  question: string
  HintTrainer: string
  file: File[]
  id: string
  ball: number
  number: number
}

export interface Question {
  HintTrainer: string
  file: File[]
  id: string
  ball: number
  number: number
  question: string
}

export interface Task {
  taskName: string
  questions: Question[]
}
