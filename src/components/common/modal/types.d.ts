import {ReactElement, ReactNode} from 'react'

export interface Props {
  title?: string
  description?: string
  children: ReactNode
  open: boolean
  className?: string
  footerVisible?: boolean
  close: () => void
  onClick?: () => void
  deleteClick?: () => void
}
