import {Button} from '@/components/common'
import {Link} from 'react-router-dom'

export const ProgramsEmpty = () => (
  <div className="flex items-center flex-col gap-4 mt-10 ">
    <i className="notranslate icn icn-plan text-[112px]"></i>
    <h2 className="text-[32px] font-bold -mt-10">Empty</h2>
    <p>Nothing has been added to this program yet</p>
    <Link to="edit">
      <Button>ADD COURSES</Button>
    </Link>
  </div>
)
