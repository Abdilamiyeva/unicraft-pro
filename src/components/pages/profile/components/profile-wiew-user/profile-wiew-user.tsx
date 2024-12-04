import {Image} from '@/components/common'
import {Link} from 'react-router-dom'

export const ProfileWiewUser = () => (
  <div className="border-r-2 border-[#ebebeb] w-[450px] h-screen max-[1248px]:w-full max-[1248px]:flex max-[1248px]:h-full">
    <div className="relative flex justify-center pt-[30px]">
      <div className="bg-[#8c8c8c] border rounded-full w-[140px] h-[140px] flex justify-center items-center">
        <Image src="/images/profile-user-img.svg" alt="images" className="w-[110px] h-[110px] mt-9" />
      </div>
      <div className="bg-[#7cb83d] w-[13px] h-[13px] absolute top-[142px] left-[214px] rounded-full border-2 border-white" />
    </div>
    <div className="text-center mt-6">
      <h2 className="text-[12px] uppercase">Administrator</h2>
      <h1 className="text-[28px] mt-[10px] font-semibold">Leo</h1>
      <Link to="#" className="text-[#8c8c8c] text-[12px] hover:text-blue-600">
        mr.alijonov.azizbek@gmail.com
      </Link>
      <div>
        <Link to="/profile/edit" className="text-[12px] border-dashed border-b border-black  hover:text-blue-600">
          Edit profile
        </Link>
      </div>
      <div className="mt-[200px]">
        <span className="text-white bg-[#7cb83d] border border-[#7cb83d] py-[5px] font-semibold rounded-[3px] text-[12.8px] px-[11.2px]">
          Online
        </span>
      </div>
    </div>
  </div>
)
