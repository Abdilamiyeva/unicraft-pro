import {Image, Tabs, Tooltip} from '@/components/common'
import {Courses} from './courses'
import {Programs} from './programs'

export const LearningPage = () => (
  <>
    <div className="h-[179px] bg-zinc-800 bg-[url(/images/bg_dna.jpg)] bg-center bg-cover border-b-[3px] border-sky-700">
      <div className="bg-linear-center w-full h-full flex flex-col items-center">
        <Image className="w-24 h-24 mt-7 mb-3 md:mb-1" src="/images/logo_color_whitetext.png" alt="logo" />
        <h1 className="text-white font-light tracking-[0.25em] text-[14px] text-center">
          ПЛАТФОРМА ПРОФЕССИОНАЛЬНОГО РАЗВИТИЯ
        </h1>
      </div>
    </div>
    <div className="flex justify-between mt-5 px-5">
      <div className="px-[14px] flex flex-wrap gap-5">
        <div>
          <div className="w-[80px] p-[3px] text-[20px] h-[80px] border-[7px] border-[#2f85c6] text-[#2f85c6] font-open-sans font-semibold rounded-full flex justify-center items-center">
            100%
          </div>
        </div>
        <div>
          <h2 className="uppercase text-[12px] text-[#7f7f7f] text-left ml-3 font-open-sans">Learning</h2>
          <div className="flex gap-5 mr-4">
            <Tooltip
              className="border-none hover:shadow-none bg-white"
              icon={
                <div className="pb-[17px] px-[14px] font-open-sans">
                  <div className="text-[26px] text-left font-medium">
                    1
                    <span className="text-[19px] text-[#333333]">
                      <span>/</span>
                      <span className="ml-2 font-normal text-gray-500">1</span>
                    </span>
                  </div>
                  <h2 className="uppercase text-[12px] font-open-sans">Courses</h2>
                </div>
              }
              title="100%"
              side={'top'}
            />
            <Tooltip
              className="border-none hover:shadow-none bg-white -ml-6"
              icon={
                <div className="pb-[17px] font-open-sans">
                  <div className="text-[26px] text-left font-medium">
                    1
                    <span className="text-[19px] text-[#333333]">
                      <span>/</span>
                      <span className="ml-2 font-normal text-gray-500">1</span>
                    </span>
                  </div>
                  <h2 className="uppercase text-[12px] font-open-sans">Programs</h2>
                </div>
              }
              title={'100%'}
              side={'top'}
            />
          </div>
        </div>
        <div>
          <h1 className="uppercase text-[12px] text-[#7f7f7f] text-left font-open-sans">results</h1>
          <div className="flex items-center gap-4">
            <div className=" flex justify-center items-center gap-4">
              <Image src="/images/results-img.jpg" alt="images" className="w-8 h-8 -mt-5 ml-2" />
              <span className="text-2xl mt-2">
                60.0
                <h2 className="uppercase text-[12px] font-open-sans -mt-2">Points</h2>
              </span>
            </div>
            <div className=" flex justify-center items-center gap-4">
              <Image src="/images/people-img.jpg" alt="images" className="w-8 h-8 -mt-5 ml-2" />
              <span className="text-2xl mt-2">
                100%
                <h2 className="uppercase text-[12px] font-open-sans -mt-2">EFFICIENCY</h2>
              </span>
            </div>
            <div className=" flex justify-center items-center gap-4">
              <img src="/public/images/certificate-img.svg" alt="images" className="w-9 h-9 -mt-5 ml-2" />
              <span className="text-2xl mt-2">
                0<h2 className="uppercase text-[12px] font-open-sans -mt-2">MEDALS</h2>
              </span>
              <span className="text-2xl mt-2">
                0<h2 className="uppercase text-[12px] font-open-sans -mt-2">RETAKES</h2>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-7 px-2">
      <Tabs
        tabs={[
          {id: 'courses', label: 'COURSES', children: <Courses />},
          {id: 'programs', label: 'PROGRAMS', children: <Programs />},
        ]}
      />
    </div>
  </>
)
