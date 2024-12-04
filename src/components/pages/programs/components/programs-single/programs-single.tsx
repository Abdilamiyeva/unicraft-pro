import {Tabs, Tooltip} from '@/components/common'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ProgramsEmpty} from './components/programs-empty'
import {StudentsEmpty} from './components/students-empty'

export const ProgramsSingle: React.FC = () => {
  // const [empty, setEmpty] = useState<boolean>(true)
  const navigate = useNavigate()
  const tabs = [
    {
      label: 'DESCRIPTION AND COURSES [1]',
      id: '1',
      children: (
        <div>
          <p>Lorem ipsum, dolor</p>
          <ProgramsEmpty />
        </div>
      ),
    },
    {label: 'STUDENT [5]', id: '2', children: <StudentsEmpty />},
  ]

  return (
    <div className="max-w-[1260px] mx-auto w-full py-10">
      <div className="flex items-center justify-between mb-7 mx-3">
        <div>
          <h3 className="text-[18px] text-gray-500 hover:text-blue-500 cursor-pointer" onClick={() => navigate(-1)}>
            Programs
          </h3>
          <h2 className="text-[28px] font-bold">Programs Name</h2>
        </div>
        <Link to="edit">
          <Tooltip
            className="px-3 py-3 rounded"
            title="Edit"
            icon={<i className="notranslate icn icn-edit text-[28px]" />}
            side="bottom"
          />
        </Link>
      </div>
      <Tabs tabs={tabs} />
    </div>
  )
}
