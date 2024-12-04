import {useState} from 'react'
import {Checkbox as CheckboxUI} from '@/components/ui/checkbox'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'

export const Checkbox = ({className, label, checked, onChange}: Props) => {
  const [isChecked, setIsChecked] = useState(checked || false)

  const handleCheckboxClick = () => {
    setIsChecked((prev: boolean) => !prev)

    if (onChange) {
      onChange(!isChecked)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <CheckboxUI
        className={cn(
          'w-5 h-5 rounded-[3px] border-[#ebebeb] bg-[#ebebeb] hover:border-blue-600 outline-none data-[state=checked]:bg-blue-600',
          className,
        )}
        onClick={handleCheckboxClick}
        checked={isChecked}
      />
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
    </div>
  )
}
