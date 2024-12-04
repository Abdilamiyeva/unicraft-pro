import {Tooltip as TooltipUI, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'

export const Tooltip = ({className, icon, title, side, defaultStyleOn = true}: Props) => (
  <TooltipProvider>
    <TooltipUI delayDuration={400}>
      <TooltipTrigger asChild className={className}>
        <div
          className={cn({
            'w-[53px] h-[42px] rounded-sm flex items-center pt-[6px] justify-center border hover:shadow-box-shadow transition-shadow duration-300 ease-in-out cursor-pointer':
              defaultStyleOn,
          })}
        >
          {icon}
        </div>
      </TooltipTrigger>
      <TooltipContent side={side}>
        <p className="text-[14px] text-gray-500">{title}</p>
      </TooltipContent>
    </TooltipUI>
  </TooltipProvider>
)
