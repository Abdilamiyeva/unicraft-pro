import {ReactElement, ReactNode} from 'react'

export interface Props {
  open: boolean
  className?: string
  close: () => void
  getForm: (values: {name: string; description: string}) => void
}

export interface MyFormData {
  name: string
  description: string
}
