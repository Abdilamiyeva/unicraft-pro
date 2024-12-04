import React from 'react'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {Props} from './types'

export const Dropdown: React.FC<Props> = ({items, trigger, className, side}) => (
  <DropdownMenu>
    <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
    <DropdownMenuContent className={className} side={side}>
      {items?.map((item, idx) => (
        <DropdownMenuItem
          className="h-11 flex items-center gap-3 px-3 hover:!bg-[#EBEBEB] rounded-none"
          key={idx}
          onClick={item.onClick}
        >
          {item.icon}
          <span className="text-sm">{item.label}</span>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
)
