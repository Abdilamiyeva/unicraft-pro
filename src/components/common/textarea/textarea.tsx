import {Textarea as TextareaUI} from '@/components/ui/textarea'
import {Props, ValueProps} from './types'
import {cn} from '@/utils/lib/utils'
import {useMemo} from 'react'

export const Textarea = ({value, onChange, className, defaultValue, placeholder, title}: Props) => {
  const mainProps = useMemo(() => {
    const props: ValueProps = {}
    if (onChange) {
      props.value = value
      props.onChange = onChange
    }
    if (defaultValue) {
      props.defaultValue = defaultValue
    }
    return props
  }, [value, defaultValue, onChange])

  return (
    <>
      <label className="block mb-2 text-[16px] my-2 font-bold text-gray-900">{title}</label>
      <TextareaUI
        {...mainProps}
        placeholder={placeholder}
        className={cn(
          'border border-[#b3b3b3] w-full text-[16px] h-[211px] focus:border-blue-600 placeholder:text-gray-400 py-2 px-4 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-sm focus:shadow-textarea-shadow-blue transition-all duration-200 ease-in-out focus:bg-white rounded',
          className,
        )}
        style={{resize: 'vertical'}}
      />
    </>
  )
}
