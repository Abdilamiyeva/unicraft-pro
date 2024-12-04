import {ChangeEvent, ReactElement} from 'react'
export interface Props {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
  defaultValue?: string
  className?: string
  placeholder?: string
  icon?: ReactElement
  divClassName?: string
}
