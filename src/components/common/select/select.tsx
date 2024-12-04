import {cn} from '@/utils/lib/utils'
import {Props} from './types'
import {AiFillCaretDown} from 'react-icons/ai'

export const Select = ({className, option, title}: Props) => (
  <div className="relative">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
    <div className="flex items-center ">
      <select
        className={cn(
          'w-[700px] px-3 outline-none focus:shadow-lg h-[40px] appearance-none border border-[#e6e6e6] text-gray-900 text-sm rounded-[3px] focus:ring-blue-500 focus:border-blue-500',
          className,
        )}
      >
        {option.map(el => (
          <option key={el.value} value={el.value}>
            {el.label}
          </option>
        ))}
        <AiFillCaretDown className="text-[#a39f9f] absolute right-2 top-10" />
      </select>
    </div>
  </div>
)
