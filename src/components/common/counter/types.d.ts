export interface Props {
  onChange?: (value: string) => void
  value?: number
  defaultValue?: string
  placeholder?: string
  name?: string
  className?: string
  inputClassName?: string
  buttonClassName?: string
  inputRef?: React.RefObject<HTMLInputElement>
  titleClassName?: string
  descriptionClassName?: string
  title?: string
  description?: string
  disabled?: boolean
  min?: number
  max?: number
}
