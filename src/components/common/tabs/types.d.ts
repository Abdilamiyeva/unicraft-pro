import {ReactNode} from 'react'

export interface TabValue {
  label: string | ReactNode
  id: string
  children: ReactNode
}

export interface Props {
  tabs: TabValue[]
  variant?: 'default' | 'outline' | 'simple'
  defaultValue?: string
  onChange?: (value: string) => void
  value?: string
}
