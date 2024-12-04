export interface Props {
  className?: string
  onChange?: (value: File | undefined) => void
  value?: File
  variant: 'top' | 'bottom'
  height?: number
}
