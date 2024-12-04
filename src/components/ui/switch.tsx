import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import {cn} from '@/utils/lib/utils'
import {IoCheckmarkOutline, IoCloseOutline} from 'react-icons/io5'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    [key: string]: any
  }
>(({className, checked, ...props}, ref) => {
  const [isChecked, setIsChecked] = React.useState(checked || false)

  const toggleSwitch = () => {
    setIsChecked(!isChecked)
  }

  return (
    <SwitchPrimitives.Root
      className={cn(
        'peer relative inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-1 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600 data-[state=unchecked]:border-blue-600 data-[state=unchecked]:bg-[#e6e6e6]',
        className,
      )}
      {...props}
      ref={ref}
      onClick={toggleSwitch}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block h-5 w-5 ml-[2px] rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0',
        )}
      />

      {isChecked ? (
        <IoCheckmarkOutline className="absolute left-1 text-white" />
      ) : (
        <IoCloseOutline className="text-sm text-[#727171] ml-2" />
      )}
    </SwitchPrimitives.Root>
  )
})

Switch.displayName = SwitchPrimitives.Root.displayName

export {Switch}
