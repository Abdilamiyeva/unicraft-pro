/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import {Option, Props} from './types'
import {FaCaretDown} from 'react-icons/fa6'
import {cn} from '@/utils/lib/utils'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {IoIosSearch} from 'react-icons/io'

export const SearchableSelect: React.FC<Props> = ({options, value, onChange, placeholder, isSearchable = true}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>(value)
  const [customOptions, setCustomOptions] = useState<Option[]>(options)
  const [searchedValue, setSearchedValue] = useState<string>('')

  const showLabel = (currentValue: string) => {
    const label = options.find(option => option.value === currentValue)?.label

    if (label && label !== '') {
      return label
    }

    return placeholder || 'Select'
  }

  const search = () => {
    if (searchedValue && searchedValue !== '') {
      const searched = options.filter(option => {
        if (option.label.toLowerCase().includes(searchedValue.toLowerCase())) {
          return option
        }
      })

      setCustomOptions(searched)
    }
  }

  useEffect(() => {
    if (onChange) {
      onChange(selectedValue)
    }

    if (searchedValue) {
      search()
    }
  }, [selectedValue, searchedValue])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div
          className={cn(
            'flex items-center justify-between min-w-48 max-w-max h-10 border border-blue-100 rounded-sm px-3 gap-1',
            {
              'border-[#CFCFCF]': isHovered,
            },
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p>{showLabel(selectedValue)}</p>
          <FaCaretDown className={isHovered ? 'text-blue-700' : ''} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 rounded-sm min-w-48" align="start">
        {isSearchable && (
          <div className="relative h-10">
            <input
              type="text"
              value={searchedValue}
              onChange={(e: any) => {
                setSearchedValue(e.target.value)
                setTimeout(() => {
                  e.target.focus()
                }, 1)
              }}
              placeholder="Search"
              className="w-full h-full text-base px-4 outline-none border-2 border-transparent focus:border-sky-200"
            />
            <IoIosSearch size={22} className="absolute top-2.5 right-2" />
          </div>
        )}

        {customOptions?.map((option, idx) => (
          <DropdownMenuItem
            className={cn(
              'flex items-center gap-1 justify-between px-5 py-3 hover:!bg-transparent hover:!text-blue-600 cursor-pointer rounded-none',
              {
                '!bg-blue-600 text-white hover:!text-white hover:!bg-blue-600': option.value === selectedValue,
              },
            )}
            key={idx}
            onClick={() => setSelectedValue(option.value)}
          >
            {option.label}
            {option?.rightSide && <p className="text-[12px] text-[#8B8B8B]">{option.rightSide}</p>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
