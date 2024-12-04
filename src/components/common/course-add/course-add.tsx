import React, {useState, useEffect} from 'react'
import {Search} from '..'
import {CourseInfoCard} from './components/course-info-card'
import {CourseAddedCard} from './components/course-added-card'
import {MockTypes, PropsCourse} from './type'

export const CourseAdd: React.FC<PropsCourse> = ({value}) => {
  const [mockData, setMockData] = useState<MockTypes[]>(value)
  const [addedData, setAddedData] = useState<MockTypes[]>([])

  useEffect(() => {
    const addMock = mockData
      .filter(val => val.isAdd)
      .sort((a, b) => a.index - b.index)
      .map((val, idx) => {
        val.index = idx
        return val
      })
    setAddedData(addMock)
  }, [mockData])

  return (
    <div className="flex items-start">
      <div className="w-1/2 border-r border-r-gray-300  pr-7">
        <Search className="w-full" />
        <div className="mt-10">
          {addedData.length !== mockData.length ? (
            mockData.map((d, idx) => (
              <div key={d.id}>
                {!d.isAdd && (
                  <CourseInfoCard
                    mock={d}
                    idx={idx}
                    mockData={mockData}
                    addedData={addedData}
                    setMockData={setMockData}
                  />
                )}
              </div>
            ))
          ) : (
            <div className="mt-20 flex flex-col items-center gap-4">
              <i className="notranslate icn icn-course text-[100px]"></i>
              <h3 className="text-[28px] font-bold -mt-8">All added</h3>
              <p>All courses have been added to the program</p>
            </div>
          )}
        </div>
      </div>
      <div className="w-1/2 pl-7">
        {addedData.length !== 0 ? (
          addedData?.map((d, idx) => (
            <div key={d.id}>
              {d.isAdd && (
                <CourseAddedCard
                  mock={d}
                  idx={idx}
                  mockData={mockData}
                  addedData={addedData}
                  setMockData={setMockData}
                />
              )}
            </div>
          ))
        ) : (
          <div className="mt-20 flex flex-col items-center gap-4">
            <i className="notranslate icn icn-plan text-[100px]"></i>
            <h3 className="text-[28px] font-bold -mt-8">Empty</h3>
            <p>Nothing has been added to this program yet</p>
          </div>
        )}
      </div>
    </div>
  )
}
