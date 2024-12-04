import React from 'react'
import {ImFileEmpty} from 'react-icons/im'
import {Button} from '../..'
import {Props} from '../type'

export const CourseInfoCard: React.FC<Props> = ({mock, mockData, addedData, setMockData}) => {
  const addCourse = () => {
    const newMockData = mockData?.map(d => {
      if (mock.id === d.id) {
        d.isAdd = true
        d.index = addedData?.length
      }
      return d
    })
    setMockData(newMockData)
  }

  return (
    <div className="card1 flex hover:shadow-xl transition-shadow border rounded-[6px] mb-4">
      <div className="w-1/4 h-32 flex justify-center items-center bg-green-400 rounded-l-[6px]">
        <ImFileEmpty className="w-12 h-12" />
      </div>
      <div className="w-3/4 py-3 pr-3 pl-5">
        <div className="flex items-center justify-between">
          <p className="font-bold text-[20px]">{mock.title}</p>
          <Button onClick={addCourse}>
            <i className="notranslate icn icn-plus"></i>
          </Button>
        </div>
        <p className="text-[14px]">{mock.description}</p>
      </div>
    </div>
  )
}
