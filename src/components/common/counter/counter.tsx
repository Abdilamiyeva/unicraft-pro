import React, {useEffect, useState} from 'react'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'

export const Counter: React.FC<Props> = ({
  onChange,
  value,
  placeholder,
  name,
  inputRef,
  titleClassName,
  descriptionClassName,
  defaultValue,
  title,
  description,
  buttonClassName,
  inputClassName,
  disabled,
  min,
  max,
}): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(value === 0 ? '' : String(value || ''))

  useEffect(() => {
    setInputValue(value === 0 ? '' : String(value || ''))
  }, [value])

  useEffect(() => {
    if (inputRef) {
      if (inputRef.current) {
        inputRef.current.value = inputValue
      }
    }
  }, [inputRef, inputValue])

  const increment = (): void => {
    setInputValue(prevValue => {
      const newValue = String(Number(prevValue) + 1)
      if (onChange) {
        onChange(newValue)
      }
      return newValue
    })
  }

  const decrement = (): void => {
    setInputValue(prevValue => {
      const newValue = Math.max(Number(prevValue) - 1, 0)
      if (onChange) {
        onChange(newValue === 0 ? '' : String(newValue))
      }
      return newValue === 0 ? '' : String(newValue)
    })
  }

  return (
    <div>
      {(title || description) && (
        <div>
          {title && (
            <h3 className={cn('font-bold text-base leading-5 m-2 ml-0 relative block', titleClassName)}>{title}</h3>
          )}
          {description && <p className={cn('text-[14px] my-[7px]', descriptionClassName)}>{description}</p>}
        </div>
      )}
      <div className="flex items-center justify-start">
        <button
          onClick={decrement}
          className={cn(
            'disabled:cursor-not-allowed rounded-none text-base text-center w-[54px] h-10 bg-[#fcfcfc] border border-solid border-[#e6e6e6] disabled:border-[#e6e6e6] disabled:bg-[#ebebeb]',
            buttonClassName,
          )}
          disabled={disabled || Number(inputValue) === 0}
        >
          -
        </button>
        <input
          type="number"
          className={cn(
            'px-[7px] h-10 w-[54px] outline-none text-center border border-solid border-[#e6e6e6] disabled:cursor-not-allowed disabled:border-[#e6e6e6] disabled:bg-[#ebebeb]',
            inputClassName,
          )}
          value={inputValue}
          defaultValue={defaultValue}
          onChange={e => {
            const newValue = e.target.value
            setInputValue(newValue)
            if (onChange) {
              onChange(newValue)
            }
          }}
          min={min || 0}
          max={max}
          placeholder={placeholder || '?'}
          name={name}
          disabled={disabled}
        />
        <button
          onClick={increment}
          className={cn(
            'rounded-none text-base text-center w-[54px] h-10 bg-[#fcfcfc] border border-solid border-[#e6e6e6] disabled:cursor-not-allowed disabled:border-[#e6e6e6] disabled:bg-[#ebebeb]',
            buttonClassName,
          )}
          disabled={disabled || Number(inputValue) === max}
        >
          +
        </button>
      </div>
    </div>
  )
}
