import {Button, Search} from '@/components/common'
import {useTranslation} from 'react-i18next'

export const CoursePage = () => {
  const {t} = useTranslation()

  return (
    <>
      <div className="h-[140px] bg-[url('/images/bg-java.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full bg-cover-to-top">
          <div className="max-w-[1260px] mx-auto flex items-center justify-between p-[14px] text-white">
            <h2 className="text-[42px] mt-2 font-bold">Java</h2>
          </div>
        </div>
      </div>
      <div className="max-w-[1260px] px-5 mx-auto py-5 border-b flex flex-wrap gap-2 items-center justify-between">
        <div className="flex items-center gap-4">
          <i className="icn icn-success text-sky-600 text-3xl"></i>
          <div>
            <h1 className="font-bold">COURSE PASSED</h1>
            <span className="text-[12px]">02/23/2024</span>
          </div>
        </div>
        <div className="flex gap-2">
          <i className="icn icn-star_filled text-3xl text-yellow-500"></i>
          <div>
            <h1 className="font-semibold text-2xl">3</h1>
            <span className="text-[12px]">COURSE RATING</span>
          </div>
        </div>
        <Button className="flex items-center gap-1 py-0.5">
          <i className="text-2xl icn icn-diplom mt-1"></i>Certificate
        </Button>
      </div>
      <div className="max-w-[1260px] px-5 mx-auto">
        <div className="">
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
                  <p className="leading-tight font-normal text-[12.8px] uppercase p-0.5">
                    {t(`pages.course.web_page`)}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <Search placeholder={t(`pages.course.material_name`)} />
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
      </div>
    </>
  )
}
