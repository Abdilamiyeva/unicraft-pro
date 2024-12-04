import {TableHead as TableHeadUI} from '@/components/ui/table'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'

export const TableHead = ({children, className, index, onClick}: Props) => (
  <TableHeadUI
    onClick={onClick}
    className={cn(
      'px-3 py-2 text-14 text-center h-fit text-black border-b-2 border-b-black',
      {
        'text-left': index === 0,
      },
      className,
    )}
  >
    {children}
  </TableHeadUI>
)
