import {ReactNode} from 'react'

export interface Props {
  open: boolean
  title?: string | ReactNode
  side?: 'top' | 'bottom' | 'right' | 'left'
  children: ReactNode
  className?: string
  titleClassName?: string
  titleHeaderClassName?: string
  close: () => void
}
