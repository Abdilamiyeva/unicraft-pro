import {Table as TableUI} from '@/components/ui/table'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'

export const Table = ({children, className, onClick}: Props) => (
  <TableUI onClick={onClick} className={cn('mt-2 mb-2', className)}>
    {children}
  </TableUI>
)
