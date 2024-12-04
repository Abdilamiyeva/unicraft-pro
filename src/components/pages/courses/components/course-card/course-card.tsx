import {Props} from './types'

export const CourseCard: React.FC<Props> = ({course}) => (
  <div className="w-[243px] h-[316px] hover:shadow-lg cursor-pointer rounded-md overflow-hidden border border-[#F2F2F2] transition-all duration-300 relative mt-[14px]">
    <img src={course?.imgUrl} alt="image" className="w-full h-[132px] object-cover" />
    <div className="p-6 h-[114px]">
      <div className="h-[110px] overflow-hidden mask-background">
        <h2 className="text-lg font-bold leading-5 mb-2">{course?.title}</h2>
        <div className="h-16 mb-1">
          <p className="text-[12px]">{course?.shortDescription}</p>
        </div>
      </div>
      <div className="w-full h-[33px] absolute bottom-3 left-6">
        <div className="w-[192px]">
          <hr className="mb-2" />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-[11px] text-[#8c8c8c]">Theory</p>
          <span className="text-[9px] border border-[#ebebeb] w-[15px] h-[15px] flex items-center justify-center rounded-sm">
            2
          </span>
        </div>
      </div>
    </div>
  </div>
)
