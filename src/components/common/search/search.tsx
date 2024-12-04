import {cn} from '@/utils/lib/utils'
import {Props} from './types'
import {SearchIcon} from '@/icons'

export const Search = ({onChange, value, defaultValue, placeholder, className, icon, divClassName}: Props) => (
  <div className={cn('relative flex items-center rounded-full w-full', divClassName)}>
    <input
      type="search"
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder || 'Search'}
      className={cn(
        'border border-gray-200 w-full rounded-full outline-none focus:border-blue-600 transition-all duration-300 ease-in-out focus:shadow-searchShadow hover:border-gray-400 py-[8px] pr-[42px] pl-[21px] text-[14px] min-w-[150px]',
        className,
      )}
    />
    <div className="absolute right-4">{icon || <SearchIcon />}</div>
  </div>
)
