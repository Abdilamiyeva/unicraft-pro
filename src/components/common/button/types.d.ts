import {ReactNode} from 'react'

export interface Props {
  htmlType?: 'submit' | 'button' | 'reset'
  variant?: 'outline' | 'default'
  theme?: 'primary' | 'default' | 'danger' | 'warning' | 'success'
  icon?: ReactNode
  loading?: boolean
  className?: string
  children?: ReactNode
  noSpaceBetweenIcon?: boolean
  disabled?: boolean
  onClick?: (event: any) => void
  size?: 'sm' | 'md' | 'lg'
  loaderClassName?: string
  title?: string
  side?: 'top' | 'bottom' | 'left' | 'right'
}

export interface ButtonColorClassNames {
  bgColor?: 'bg-[#fcfcfc]' | 'bg-[#2e83c4]' | 'bg-[#b63d3d]' | 'bg-[#d4b31e]' | 'bg-[#7bb63d]'
  borderColor?: 'border-gray-300' | 'border-[#2a77b2]' | 'border-[#a53737]' | 'border-[#c1a21c]' | 'border-[#70a537]'
  textColor?: 'text-black' | 'text-white'
  onHover?: 'hover:shadow-box-shadow' | ''
}
