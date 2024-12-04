import {ReactNode} from 'react'

export interface ValueProps {
  value?: string
  defaultValue?: string
  onChange?: () => void
}

export interface Props {
  className?: string
  value?: string
  onChange?: any
  defaultValue?: string
  placeholder?: string
  title?: string
}
