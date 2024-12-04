/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useMemo, useState} from 'react'
import {ComponentProps, Message, Props} from './types'
import {CheckIcon} from '@/icons/check'
import {CheckLgIcon} from '@/icons/check-lg'
import {CheckErrorIcon} from '@/icons/check-error'
import {cn} from '@/utils/lib/utils'
import {Input as InputUI} from '@/components/ui/input'

export const Input = ({
  type = 'text',
  className,
  placeholder,
  label,
  labelClassName,
  value,
  defaultValue,
  variant,
  onChange,
  disabled,
  errorMsg,
  required,
  name,
  validEmail,
  labelIcon,
  passwordValidation = true,
}: Props) => {
  const [vars, setVars] = useState<string[]>(['', ''])
  const [validMessage, setValidMessage] = useState<Message[]>()
  const [isBlur, setIsBlur] = useState<boolean>(false)

  const componentProps = useMemo(() => {
    const props: ComponentProps = {}

    if (onChange) {
      props.value = value
      props.onChange = onChange
    }

    if (defaultValue) {
      if (typeof defaultValue === 'string') {
        props.defaultValue = defaultValue
      }
    }

    return props
  }, [value, defaultValue, onChange])

  const changeVariant = (v: string, hasValue?: boolean) => {
    switch (v) {
      case 'yellow':
        return hasValue
          ? 'bg-white focus:bg-white'
          : 'bg-[#faf4db] focus:bg-[#faf4db] border-[#D0B953] focus:border-[#D0B953] focus:shadow-input-shadow-yellow'
      case 'success':
        return 'border-green-600 focus:border-green-600 shadow-input-shadow-green'
      case 'error':
        return 'border-red-500 focus:border-red-500 shadow-input-shadow-red'
      case 'emailError':
        return 'border-red-500 focus:border-primary-600'
      default:
        return ''
    }
  }

  useEffect(() => {
    if (variant) {
      setVars([variant, changeVariant(variant)])
    }
  }, [variant, value])

  useEffect(() => {
    if (type === 'text' && value) {
      setVars(['primary', changeVariant('primary')])
    }
    if (type === 'text' && value) {
      setVars(['yellow', changeVariant('yellow', true)])
    }
    if (type === 'email') {
      if (errorMsg) {
        setVars(['error', changeVariant('error')])
      }

      if (!errorMsg && value) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
        const emailVariant = emailRegex.test(value) ? '' : 'emailError'

        setVars(['primary', changeVariant('primary')])
        setVars(['yellow', changeVariant('yellow')])

        if (!emailVariant && validEmail) {
          setVars(['success', changeVariant('success')])
        }
        if (emailVariant) {
          setVars([emailVariant, changeVariant(emailVariant)])
        }
      }
    }

    if (type === 'password' && value && !passwordValidation) {
      const maxMinLength = value?.length > 5 && value?.length < 24
      const hasUpperCase = /[A-Z]/.test(value)
      const hasLowerCase = /[a-z]/.test(value)
      const hasNumber = /\d/.test(value)
      const hasSpecialChar = /[!_@#$%^&*(),.?":{}|<>]/.test(value)

      const messages: Message[] = [
        {message: '6-24 characters', valid: maxMinLength},
        {message: 'At least one upper case', valid: hasUpperCase},
        {message: 'At least one lower case', valid: hasLowerCase},
        {message: 'At least one number', valid: hasNumber},
        {message: 'At least one special character', valid: hasSpecialChar},
      ]
      const foo = messages.every(m => m.valid)
      if (!foo) {
        setVars(['error', changeVariant('error')])
      } else {
        setTimeout(() => setValidMessage([]), 1000)
        setVars(['primary', changeVariant('primary')])
        setVars(['yellow', changeVariant('yellow')])
      }

      setValidMessage(messages)
    }

    if (type === 'password' && value === '' && isBlur) {
      setValidMessage(prev => prev?.map(msg => ({...msg, valid: false})))
    }

    if (type === 'password' && value === '' && !isBlur) {
      setValidMessage([])
    }
  }, [value, type, isBlur])

  return (
    <>
      <label className="font-medium w-full relative">
        <div className="flex gap-4">
          <p className={cn('text-base font-bold font-quicksand leading-20 block mb-2 font-open-sans', labelClassName)}>
            {label}
          </p>
          <div className="mt-1">{labelIcon}</div>
        </div>
        {required && <span className="text-red-600">*</span>}

        <InputUI
          className={cn(
            'border border-[#b3b3b3] focus:border-blue-600 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-sm focus:shadow-input-shadow-blue placeholder:text-[#8c8c8c] transition-all duration-200 ease-in-out focus:bg-white rounded',
            {
              'text-grey-light-500 !bg-grey-light-200 !border-grey-light-500 !border': disabled,
            },
            className,
            vars[1],
          )}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          {...componentProps}
          onBlur={() => setIsBlur(false)}
          onFocus={() => setIsBlur(true)}
        />
        <div
          className={cn(
            'flex items-center font-quicksand absolute  right-0 top-0 h-full',
            `${label ? 'top-3 right-3' : 'top-[1.7px] right-3'}`,
          )}
        >
          {vars[0] === 'success' && !disabled && <CheckIcon className="fill-green-800" />}
        </div>
      </label>
      <div className="ml-1">
        {errorMsg?.length ? (
          <p className="mt-[5px] text-12 font-medium leading-5 font-quicksand text-red-500">{errorMsg}</p>
        ) : (
          ''
        )}
        {vars[0] === 'emailError' && !isBlur ? (
          <p className="mt-[5px] text-12 font-medium leading-5 font-quicksand text-red-500">
            Please enter correct email
          </p>
        ) : (
          ''
        )}
        {type === 'password' && !passwordValidation && (
          <ul>
            {validMessage?.map(({message, valid}) => (
              <li key={message} className="flex gap-[5px] items-center pt-[5px]">
                {valid ? (
                  <CheckLgIcon className="fill-green-600 w-[11px] h-2.5" />
                ) : (
                  <CheckErrorIcon className="fill-red-500 w-2.5 h-2.5" />
                )}
                <p
                  className={cn(
                    'text-12 font-medium leading-5 font-quicksand',
                    `${valid ? 'text-green-600' : 'text-red-500'}`,
                  )}
                >
                  {message}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
