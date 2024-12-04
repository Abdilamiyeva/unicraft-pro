import React, {ChangeEvent, ReactNode} from 'react'

export interface Props {
  type?: 'password' | 'email' | 'text' | 'number' | 'file'
  className?: string
  placeholder?: string
  label?: string | ReactNode
  labelClassName?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
  defaultValue?: string | number | File | undefined
  disabled?: boolean
  errorMsg?: string
  variant?: 'primary' | 'yellow' | 'success' | 'error'
  required?: boolean
  multiple?: boolean
  name?: string
  passwordValidation?: boolean
  validEmail?: boolean
  labelIcon?: string | ReactNode
  accept?: string
}

export interface ComponentProps {
  value?: string
  defaultValue?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface Message {
  message?: string
  valid?: boolean
}
