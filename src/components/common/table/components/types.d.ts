import {ReactNode} from 'react'

export interface Props {
  children?: ReactNode
  className?: string
  index?: number
  onClick?: () => void
}
