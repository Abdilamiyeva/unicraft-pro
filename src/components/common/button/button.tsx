import React, {useMemo} from 'react'
import {ButtonColorClassNames, Props} from './types'
import {cn} from '@/utils/lib/utils'
import {Spinner} from '../spinner'
import {Tooltip} from '../tooltip'

export const Button: React.FC<Props> = ({
  children,
  icon,
  loading,
  variant,
  theme = 'default',
  size = 'md',
  className,
  loaderClassName,
  disabled,
  noSpaceBetweenIcon,
  htmlType = 'button',
  onClick = () => {},
  title,
  side = 'top',
}) => {
  const themeColors = useMemo(() => {
    const colors: ButtonColorClassNames = {}

    switch (theme) {
      case 'primary':
        colors.bgColor = 'bg-[#2e83c4]'
        colors.borderColor = 'border-[#2a77b2]'
        colors.textColor = 'text-white'
        colors.onHover = 'hover:shadow-box-shadow'
        break
      case 'danger':
        colors.bgColor = 'bg-[#b63d3d]'
        colors.borderColor = 'border-[#a53737]'
        colors.textColor = 'text-white'
        colors.onHover = ''
        break
      case 'warning':
        colors.bgColor = 'bg-[#d4b31e]'
        colors.borderColor = 'border-[#c1a21c]'
        colors.textColor = 'text-black'
        colors.onHover = ''
        break
      case 'success':
        colors.bgColor = 'bg-[#7bb63d]'
        colors.borderColor = 'border-[#70a537]'
        colors.textColor = 'text-black'
        colors.onHover = ''
        break
      default:
        colors.bgColor = 'bg-[#fcfcfc]'
        colors.borderColor = 'border-gray-300'
        colors.textColor = 'text-black'
        colors.onHover = 'hover:shadow-box-shadow'
        break
    }

    return colors
  }, [theme])

  const variantClassNames = useMemo(() => {
    switch (variant) {
      case 'outline':
        return `${themeColors.borderColor} ${themeColors.textColor} ${themeColors.onHover} bg-transparent`
      default:
        return `${themeColors.bgColor} ${themeColors.borderColor}  ${themeColors.onHover} ${themeColors.textColor}`
    }
  }, [variant, themeColors])

  const sizes = useMemo(() => {
    switch (size) {
      case 'sm':
        return 'text-[12px] px-4 py-2'
      case 'md':
        return 'text-base px-[21px] py-[8px]'
      case 'lg':
        return 'text-lg px-8 py-3'
      default:
        return 'text-base px-[21px] py-[8px]'
    }
  }, [size])

  const spinnerClassNames = useMemo(() => {
    switch (variant) {
      case 'outline':
        return `bg-white ${themeColors.borderColor}`
      default:
        return `!border-white ${themeColors.bgColor}`
    }
  }, [variant, themeColors])

  return (
    <>
      {title ? (
        <Tooltip
          icon={
            <button
              type={htmlType}
              disabled={disabled || loading}
              onClick={onClick}
              className={cn(
                'group relative min-w-max border border-solid border-gray-300 cursor-pointer uppercase font-bold rounded-[3px] m-[2px] text-center leading-1 tracking-wide duration-default flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed',
                sizes,
                loading && 'opacity-60 cursor-not-allowed',
                variantClassNames,
                className,
              )}
            >
              {loading && (
                <span
                  className={cn(
                    'absolute top-0 left-0 w-full h-full grid place-content-center duration-default',
                    spinnerClassNames,
                  )}
                >
                  <Spinner
                    className={cn('!w-4 !h-4 !border-[2px] border-red-600', spinnerClassNames, loaderClassName)}
                  />
                </span>
              )}
              {icon}
              {icon && !noSpaceBetweenIcon ? <span>&nbsp;&nbsp;</span> : ''}
              {children}
            </button>
          }
          className="border-none hover:bg-transparent"
          title={`${title}`}
          side={side}
        />
      ) : (
        <button
          type={htmlType}
          disabled={disabled || loading}
          onClick={onClick}
          className={cn(
            'group relative min-w-max border border-solid border-gray-300 cursor-pointer uppercase font-bold rounded-[3px] m-[2px] text-center leading-1 tracking-wide duration-default flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed',
            sizes,
            loading && 'opacity-60 cursor-not-allowed',
            variantClassNames,
            className,
          )}
        >
          {loading && (
            <span
              className={cn(
                'absolute top-0 left-0 w-full h-full grid place-content-center duration-default',
                spinnerClassNames,
              )}
            >
              <Spinner className={cn('!w-4 !h-4 !border-2 border-red-600', spinnerClassNames, loaderClassName)} />
            </span>
          )}
          {icon}
          {icon && !noSpaceBetweenIcon ? <span>&nbsp;&nbsp;</span> : ''}
          {children}
        </button>
      )}
    </>
  )
}
