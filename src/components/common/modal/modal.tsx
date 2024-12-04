import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'

export const Modal = ({
  children,
  open,
  className,
  title,
  description,
  close,
  onClick,
  deleteClick,
  footerVisible = true,
}: Props) => (
  <Dialog open={open} onOpenChange={close}>
    <DialogContent className={cn('w-[550px] rounded-none', className)}>
      <DialogHeader>
        <DialogTitle className="text-[20px]">{title}</DialogTitle>
        <DialogDescription className="text-[14px] text-black">{description}</DialogDescription>
      </DialogHeader>
      {children}
      {footerVisible && (
        <DialogFooter>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <button onClick={onClick}>Save</button>
              <DialogClose asChild>
                <button>Cancel</button>
              </DialogClose>
            </div>
            <button onClick={deleteClick}>Delete</button>
          </div>
        </DialogFooter>
      )}
    </DialogContent>
  </Dialog>
)
