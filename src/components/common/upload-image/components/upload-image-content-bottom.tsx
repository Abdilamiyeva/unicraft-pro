import {CheckArrowIcon} from '@/icons/check-arrow'

export const UploadImageContentBottom = () => (
  <div
    style={{
      backgroundImage: 'linear-gradient(to right, rgba(124, 184, 61, 0.05), rgba(124, 184, 61, 0) 50%)',
    }}
    className="flex gap-10 justify-between items-start text-sm border-l-2 pl-[30px] mt-6 shadow-[-15px_0px_20px_-20px_rgb(124,184,61)] border-[rgb(124,184,61)] h-[200px] p-7"
  >
    <div className="w-[230px]">
      <p>
        Minimum photo size:<b className="font-bold"> 300x300 pixels.</b>
      </p>

      <p>
        Maximum photo size:<b className="font-bold">1000x1000 pixels.</b>
      </p>
      <p>
        Maximum file size:<b className="font-bold">500KB</b>
      </p>
      <p>
        Allowed file formats::<b className="font-bold"> png, jpeg</b>
      </p>
    </div>
    <div className="-mt-5">
      <CheckArrowIcon className="text-[#96C80A] w-12 h-12" />
    </div>
  </div>
)
