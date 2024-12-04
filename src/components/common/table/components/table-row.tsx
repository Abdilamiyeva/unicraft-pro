import {TableRow as TableRowUI} from '@/components/ui/table'
import {Props} from './types'

export const TableRow = ({children, className, onClick}: Props) => (
  <TableRowUI className={className} onClick={onClick}>
    {children}
  </TableRowUI>
)
