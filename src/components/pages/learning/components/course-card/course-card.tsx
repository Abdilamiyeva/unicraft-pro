import React from 'react'
import {Props} from './types'

export const CourseCard: React.FC<Props> = ({course}) => (
  <div className="w-[243px] h-[316px] hover:shadow-lg cursor-pointer rounded-md overflow-hidden border border-[#F2F2F2] transition-all duration-300 relative mt-[14px]">
    <img src={course?.imgUrl || '/images/bg_dna.jpg'} alt="image" className="w-full h-[132px] object-cover" />
    <div className="p-6 h-[114px]">
      <div className="h-[110px] overflow-hidden mask-background">
        <h2 className="text-lg font-bold leading-5 mb-2">{course?.name || 'Javascript'}</h2>
        <div className="h-16 mb-1">
          <p className="text-[12px]">
            {course?.description || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, dolor.'}
          </p>
        </div>
      </div>
    </div>
    {/* if course passed */}
    <i className="icn icn-success position absolute bottom-2 right-2 text-4xl text-sky-500"></i>
  </div>
)
