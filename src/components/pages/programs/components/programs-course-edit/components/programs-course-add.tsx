import React from 'react'
import {CourseAdd} from '@/components/common'

const mock = [
  {id: 'm1', title: 'java', description: 'lorem ipsum on your sim', isAdd: false, index: 0},
  {
    id: 'm2',
    title: 'javaScript',
    description: 'lorem ipsum lorem ipsum on your sim on your sim',
    isAdd: false,
    index: 0,
  },
  {
    id: 'm3',
    title: 'html',
    description: 'lorem ipsum lorem ipsum on your sim on your sim',
    isAdd: false,
    index: 0,
  },
  {
    id: 'm4',
    title: 'typeScript',
    description: 'Embark on your journey into the world of Node',
    isAdd: false,
    index: 0,
  },
]

export const ProgramsCourseAdd: React.FC = () => (
  <div>
    <CourseAdd value={mock} />
  </div>
)
