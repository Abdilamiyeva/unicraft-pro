import React from 'react'
import {Button} from '../..'
import {ImFileEmpty} from 'react-icons/im'
import {Props} from '../type'

export const CourseAddedCard: React.FC<Props> = ({mock, mockData, addedData, setMockData, idx}) => {
  const deleteCourse = () => {
    const newMockData = mockData?.map(d => {
      if (mock.id === d.id) {
        d.isAdd = false
        d.index = 0
      }
      return d
    })
    setMockData(newMockData)
  }
  const upSort = () => {
    const sortMock = mockData.map(val => {
      if (val.id === mock.id) {
        val.index--
      } else if (val.index === idx - 1) {
        val.index++
      }
      return val
    })
    setMockData([...sortMock])
  }
  const downSort = () => {
    const sortMock = mockData.map(val => {
      if (val.id === mock.id) {
        val.index++
      } else if (val.index === idx + 1) {
        val.index--
      }
      return val
    })
    setMockData([...sortMock])
  }

  return (
    <div className="card2 flex gap-2 items-center mt-10">
      <div className="border-r border-r-gray-500 flex items-center h-[132px] pr-3">{idx + 1}</div>
      <div className="flex hover:shadow-xl transition-shadow border rounded-[6px] w-full">
        <div className="w-1/4 h-32 flex justify-center items-center bg-green-400 rounded-l-[6px]">
          <ImFileEmpty className="w-12 h-12" />
        </div>
        <div className="w-3/4 py-3 pr-3 pl-5">
          <div className="flex items-center justify-between">
            <p className="font-bold text-[20px]">{mock.title}</p>
            <Button onClick={deleteCourse} theme="danger">
              <i className="notranslate icn icn-minus text-white"></i>
            </Button>
          </div>
          <p className="text-[14px]">{mock.description}</p>
        </div>
      </div>
      <div>
        <Button className="py-0 px-3 group" onClick={idx !== 0 ? upSort : undefined}>
          <i className={`notranslate icn icn-sort_up text-gray-200 ${idx !== 0 ? 'group-hover:text-black' : ''}`}></i>
        </Button>
        <Button className="py-0 px-3 group" onClick={idx + 1 !== addedData?.length ? downSort : undefined}>
          <i
            className={`notranslate icn icn-sort_down text-gray-200 ${idx + 1 !== addedData?.length ? 'group-hover:text-black' : ''}`}
          ></i>
        </Button>
      </div>
    </div>
  )
}
