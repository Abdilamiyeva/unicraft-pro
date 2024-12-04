import {Popover, PopoverContent} from '@/components/ui/popover'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'
import {PopoverTrigger} from '@radix-ui/react-popover'
import React from 'react'

export const LayoutPopOver: React.FC<Props> = ({children, side, open, close, className, trigger}) => (
  <Popover open={open} onOpenChange={close}>
    <PopoverTrigger>{trigger}</PopoverTrigger>
    <PopoverContent
      className={cn(
        'w-[500px] p-0 rounded-sm data-[state=open]:slide-in-from-left-10 4xl:data-[state=open]:slide-in-from-top-10',
        className,
      )}
      side={side}
    >
      <div>{children}</div>
    </PopoverContent>
  </Popover>
)
