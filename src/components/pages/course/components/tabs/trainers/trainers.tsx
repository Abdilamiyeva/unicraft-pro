import {useState} from 'react'
import {Button, Image, Search, Sidebar, Swap} from '@/components/common'
import {AVAILABLE_DATA, isOnline} from '../../../mock'
import {useTranslation} from 'react-i18next'

export const Trainers = () => {
  const [isOpenManageTrainers, setIsOpenManageTrainers] = useState<boolean>(false)
  const {t} = useTranslation()

  return (
    <div>
      <div className="py-[7px] flex items-center">
        <div className="p-[7px] w-full">
          <Search className="w-full" placeholder="Trainer full name" />
        </div>
        <div className="p-[7px] flex items-center justify-center">
          <Button
            icon={<i className="icn icn-users_add text-[24px]" />}
            onClick={() => setIsOpenManageTrainers(true)}
            noSpaceBetweenIcon
            size="sm"
            title={t(`pages.course.manage_trainers`)}
            className="p-0.5 px-2.5"
          />
          <Sidebar
            open={isOpenManageTrainers}
            close={() => setIsOpenManageTrainers(false)}
            className="min-w-[80%] lg:min-w-full"
          >
            <div>
              <div className="flex-wrap flex items-center justify-between px-7 gap-3">
                <h2 className="text-[34px] font-bold whitespace-normal">{t(`pages.course.manage_trainers`)}</h2>
                <div className="flex items-center justify-center">
                  <Button onClick={() => setIsOpenManageTrainers(false)}>{t(`common.cancel`)}</Button>
                  <Button theme="primary">{t(`common.save`)}</Button>
                </div>
              </div>
              <div className="p-[14px]">
                <Swap availableData={AVAILABLE_DATA} onAssignedChange={users => console.warn(users)} />
              </div>
            </div>
          </Sidebar>
        </div>
      </div>
      <div className="py-[28px] flex flex-col gap-1">
        <div className="py-[3.5px] px-3 flex items-center justify-start gap-4 hover:bg-blue-100">
          <div className="w-[42px] h-[42px] relative">
            <Image
              src="/images/profile-user-img.svg"
              alt="User"
              className="bg-[#8c8c8c] w-[42px] h-[42px] rounded-full pt-2"
            />
            <span
              className={`w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full ${isOnline ? 'bg-[#7cb83d]' : 'bg-[#333333]'}`}
            />
          </div>
          <p>Leo</p>
        </div>
        <div className="py-[3.5px] px-3 flex items-center justify-start gap-4 hover:bg-blue-100">
          <div className="w-[42px] h-[42px] relative">
            <Image
              src="/images/profile-user-img.svg"
              alt="User"
              className="bg-[#8c8c8c] w-[42px] h-[42px] rounded-full pt-2"
            />
            <span
              className={`w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full ${isOnline ? 'bg-[#7cb83d]' : 'bg-[#333333]'}`}
            />
          </div>
          <p>Leo</p>
        </div>
      </div>
    </div>
  )
}
