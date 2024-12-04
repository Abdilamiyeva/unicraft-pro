import {TableCell as TableCellUI} from '@/components/ui/table'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'

export const TableCell = ({children, className, onClick}: Props) => (
  <TableCellUI onClick={onClick} className={cn('text-center h-fit px-3 py-2', className)}>
    {children}
  </TableCellUI>
)
