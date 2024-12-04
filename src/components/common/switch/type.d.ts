import {ReactNode} from 'react'
export interface Props {
  label?: ReactNode
  checked?: boolean
  onCheckedChange?: (status: boolean) => void
  text?: string
  size?: string
}
