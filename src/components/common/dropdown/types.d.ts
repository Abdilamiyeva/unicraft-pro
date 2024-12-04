import {ReactElement, ReactNode} from 'react'

export interface Props {
  trigger: JSX.Element
  items: DropdownItem[]
  className?: string
  side?: 'right' | 'left' | 'top' | 'bottom'
}

export interface DropdownItem {
  icon: ReactElement
  label: string | ReactNode
  onClick?: () => void
}
