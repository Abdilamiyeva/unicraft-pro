import {ReactNode} from 'react'

export interface Props {
  icon?: ReactNode
  title?: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
  defaultStyleOn?: boolean
  onClick?: (value: File | undefined) => void
  onChange?: (value: File | undefined) => void
}
