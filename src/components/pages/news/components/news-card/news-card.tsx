import {EyeIcon} from '@/icons'
import {Link} from 'react-router-dom'

export const NewsCard = () => (
  <Link to="id">
    <div className="border border-[#ccc] rounded-[10px] shadow-md h-[392px]">
      <img
        src="/public/images/placeholder.jpg"
        alt="img"
        loading="lazy"
        className="w-full h-[190px] rounded-t-[10px]"
      />
      <div className="p-4">
        <h3 className="text-[20px] font-semibold">Biz boshladik! Yangilangan </h3>
        <p className="my-2 h-[105px] overflow-auto ">Lorem ipsum dolor sit amet</p>
        <div className="bottom flex justify-between items-center">
          <p>16.02.2024 </p>
          <div className="flex items-center gap-1">
            <EyeIcon className="text-[#888] w-5 h-5" />
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  </Link>
)
