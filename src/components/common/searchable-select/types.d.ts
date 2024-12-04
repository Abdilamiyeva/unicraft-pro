export interface Props {
  options: Option[]
  value: string
  onChange: (val: string) => void
  placeholder?: string
  isSearchable?: boolean
}

export interface Option {
  value: string
  label: string
  rightSide?: string
}
