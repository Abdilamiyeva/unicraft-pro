export interface Props {
  option: OptionI[]
  title?: string
  className?: string
}

export interface OptionI {
  value: string
  label: string
}
