import {Sheet, SheetContent, SheetHeader, SheetTitle} from '@/components/ui/sheet'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'

export const Sidebar = ({
  open,
  close,
  children,
  title,
  side,
  className,
  titleClassName,
  titleHeaderClassName,
}: Props) => (
  <Sheet open={open} onOpenChange={close}>
    <SheetContent className={cn('p-0 min-w-[500px]', className)} side={side}>
      {title && (
        <SheetHeader className={cn('absolute top-0 bg-[#EBEBEB] pb-3 pt-3 w-full px-6', titleHeaderClassName)}>
          <SheetTitle className={cn('font-semibold w-full flex', titleClassName)}>{title}</SheetTitle>
        </SheetHeader>
      )}
      <div className="w-full overflow-y-auto max-h-full mt-12 px-5">{children}</div>
    </SheetContent>
  </Sheet>
)
