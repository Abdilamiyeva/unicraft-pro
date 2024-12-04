import {Search, Tooltip} from '@/components/common'
import {Table} from '@/components/common/table'
import {TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/common/table/components'
import {Link, useNavigate} from 'react-router-dom'

const tableColumns: string[] = ['Program name', 'Courses', 'Students']
const mock = [1, 2]
export const ProgramsPage = () => {
  const navigate = useNavigate()
  return (
    <div className="m-7">
      <div className="flex justify-between items-center gap-6 mb-16 max-[960px]:items-start">
        <div className="flex justify-between items-center w-full max-[960px]:items-start max-[960px]:flex-col max-[960px]:gap-3">
          <h2 className="text-[30px] font-bold">Programs</h2>
          <Search divClassName="w-[227px] max-[960px]:!w-full" />
        </div>
        <div className="flex items-center gap-1">
          <Link to="/programs/create">
            <Tooltip
              title="Create a program"
              side="top"
              icon={<i className="notranslate icn icn-plan_add text-[28px]"></i>}
              className="rounded px-3"
            />
          </Link>
          <Tooltip
            title="Program structure on the platform (csv)"
            side="top"
            icon={<i className="notranslate icn icn-structure text-[28px]"></i>}
            className="rounded px-3"
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {tableColumns?.map((col, index) => (
              <TableHead
                key={index}
                index={index}
                className={`font-semibold text-[17px] ${index !== 0 ? 'w-[150px]' : ''}`}
              >
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {mock.map(item => (
            <TableRow key={item} onClick={() => navigate('id')}>
              <TableCell className="text-left">Java full course</TableCell>
              <TableCell>1</TableCell>
              <TableCell>3</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
