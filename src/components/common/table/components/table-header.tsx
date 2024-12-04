import {TableHeader as TableHeaderUI} from '@/components/ui/table'
import {Props} from './types'

export const TableHeader = ({children, className, onClick}: Props) => (
  <TableHeaderUI className={className} onClick={onClick}>
    {children}
  </TableHeaderUI>
)
