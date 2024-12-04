import React from 'react'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'

export const Avatar: React.FC<Props> = ({src, alt, isOnline, className}) => (
  <div className={cn('flex justify-center w-[84px] h-[84px] relative', className)}>
    <div className="bg-[#8c8c8c] rounded-full w-full h-full flex justify-center items-center">
      <img src={src || '/layout/profile-user-img.svg'} alt={alt} className="w-[70px] absolute bottom-0" />
    </div>
    <div
      className={cn('bg-black w-[12px] h-[12px] absolute right-2 bottom-1 rounded-full border-2 border-white', {
        'bg-[#7cb83d]': isOnline,
      })}
    />
  </div>
)
