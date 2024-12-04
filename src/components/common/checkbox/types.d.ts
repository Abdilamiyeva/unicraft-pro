import {ReactNode} from 'react'

export interface Props {
  label?: ReactNode
  checked?: boolean
  onChange?: (e: boolean) => void
  className?: string
}
