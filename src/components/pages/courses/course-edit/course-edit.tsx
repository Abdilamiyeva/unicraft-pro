import {Button} from '@/components/common'
import {Tabs} from '@/components/common/tabs'
import {useMemo, useState} from 'react'
import {BaseCourseForm} from '../components/base-course-form'
import {Score} from './components/score'
import {Lessons} from '../lessons'

export const CourseEdit = () => {
  const [activeTab, setActiveTab] = useState('info')

  const courseEditTabs = useMemo(
    () => [
      {
        id: 'info',
        label: 'INFO',
        children: <BaseCourseForm btnName="Save" deleteBtnName="delete course" />,
      },
      {id: 'lessons', label: 'LESSONS', children: <Lessons></Lessons>},
      {id: 'score', label: 'SCORE', children: <Score />},
    ],
    [],
  )

  return (
    <div className="px-5">
      <div className="flex px-2 font-sans justify-between items-start mb-10">
        <div>
          <h2 className="font-bold text-3xl mb-1">Course editor </h2>
          <p className="font-normal text-base text-[#8c8c8c]">Node JS course for beginners</p>
        </div>
        <Button>PROCEED TO THE COURSE</Button>
      </div>
      <Tabs tabs={courseEditTabs} defaultValue="info" onChange={prev => setActiveTab(prev)} value={activeTab} />
    </div>
  )
}
