import {Button, Tabs} from '@/components/common'
import React from 'react'
import {ProgramsCourseCreateEdit} from './components/programs-course-create-edit'
import {useNavigate} from 'react-router-dom'
import {ProgramsCourseAdd} from './components/programs-course-add'

export const ProgramsCourseEdit: React.FC = () => {
  const navigate = useNavigate()
  const tabs = [
    {
      label: 'DESCRIPTION',
      id: '1',
      children: <ProgramsCourseCreateEdit />,
    },
    {
      label: 'CORSES [0]',
      id: '2',
      children: <ProgramsCourseAdd />,
    },
  ]
  return (
    <div className="m-7">
      <div className="flex justify-between items-center mb-16 px-2">
        <div>
          <h3 className="text-[28px] font-bold">Editing the program</h3>
          <p className="text-[18px] text-gray-500">Css</p>
        </div>
        <div className="flex gap-1 items-center">
          <Button theme="primary">SAVE</Button>
          <Button onClick={() => navigate(-1)}>COMPLETE</Button>
        </div>
      </div>
      <Tabs tabs={tabs} />
    </div>
  )
}
