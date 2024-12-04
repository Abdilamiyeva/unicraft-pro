import {Search} from '@/components/common'
import {useTranslation} from 'react-i18next'

export const Description = () => {
  const {t} = useTranslation()

  return (
    <div className="px-4">
      <div className="p-7 pl-0">
        <p className="m-7 my-2 ml-0 leading-normal font-semibold">java sari ilk qadamlar, olg'a!</p>
      </div>
      <div>
        <p className="py-2 uppercase text-[12.8px] leading-none opacity-50">{t(`pages.course.theory`)}</p>
        <div className="flex items-center justify-start gap-3">
          <div className="flex items-start justify-start gap-2">
            <div>
              <i className="icn icn-book text-[32px]" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-2xl font-normal leading-tight p-0.5">1</p>
              <p className="leading-tight font-normal text-[12.8px] uppercase p-0.5">{t(`pages.course.text`)}</p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-2">
            <div>
              <i className="icn icn-iframe text-[32px]" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-2xl font-normal leading-tight p-0.5">1</p>
              <p className="leading-tight font-normal text-[12.8px] uppercase p-0.5">{t(`pages.course.web_page`)}</p>
            </div>
          </div>
        </div>
        <div className="px-[21px] py-5">
          <Search className="w-full m-[9px] ml-[7px]" placeholder={t(`pages.course.material_name`)} />
        </div>
        <div className="my-8">
          <div className="pl-6 py-2 cursor-pointer relative flex justify-start items-center gap-7 hover:bg-blue-100">
            <div className="w-14 h-14 rounded-full shadow-icon flex items-center justify-center text-center">
              <i className="icn icn-book text-[32px] mt-1" />
            </div>
            <p className="text-[19.44px] font-normal">java introduction</p>
          </div>
          <div className="pl-6 py-2 cursor-pointer relative flex justify-start items-center gap-7 hover:bg-blue-100">
            <div className="w-14 h-14 rounded-full shadow-icon flex items-center justify-center text-center">
              <i className="icn icn-iframe text-[32px] mt-1" />
            </div>
            <p className="text-[19.44px] font-normal">Web page</p>
          </div>
        </div>
      </div>
    </div>
  )
}
