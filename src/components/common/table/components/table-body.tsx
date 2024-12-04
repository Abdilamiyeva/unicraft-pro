import {TableBody as TableBodyUI} from '@/components/ui/table'
import {Props} from './types'

export const TableBody = ({children, className, onClick}: Props) => (
  <TableBodyUI onClick={onClick} className={className}>
    {children}
  </TableBodyUI>
)
