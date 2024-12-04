import {ReactNode} from 'react'

export interface Props {
  children: ReactNode
  side?: 'right' | 'left' | 'top' | 'bottom'
  open?: boolean
  className?: string
  trigger: boolean
  close?: (value: boolean) => void
}
