import {Button, Image, Modal, Search, SearchableSelect, Select, Sidebar, Swap} from '@/components/common'
import {CircularProgressbar, StatCard, StudentsTable} from './components'
import {BiSolidUserDetail} from 'react-icons/bi'
import {useState} from 'react'
import {AVAILABLE_DATA} from '../../../mock'
import {useTranslation} from 'react-i18next'

export const Students = () => {
  const [isOpenManageStudents, setIsOpenManageStudents] = useState(false)
  const [isRepostsCourse, setIsRepostsCourse] = useState(false)
  const {t} = useTranslation()

  return (
    <div className="px-7">
      <div className="flex items-center justify-start flex-wrap">
        <CircularProgressbar percentage={50} />
        <StatCard
          image={undefined}
          label={t(`pages.course.overall`)}
          value="1"
          unit="2"
          description={t(`pages.course.students`)}
        />
        <StatCard
          image={<Image src="/images/results-img.jpg" alt="images" className="w-8 h-8 mt-2" />}
          label={t(`pages.course.results`)}
          value="60.0"
          unit="60.0"
          description={t(`pages.course.points`)}
        />
        <StatCard
          image={<Image src="/images/people-img.jpg" alt="images" className="w-8 h-8 mt-2" />}
          label=""
          value="100%"
          unit=""
          description={t(`pages.course.efficiency`)}
        />
        <StatCard
          image={<img src="/public/images/certificate-img.svg" alt="images" className="w-9 h-9 mt-2" />}
          label=""
          value="0"
          unit=""
          description={t(`pages.course.medals`)}
        />
        <StatCard image={undefined} label="" value="0" unit="" description={t(`pages.course.retake`)} />
      </div>
      <div className="py-10">
        <div className="w-full flex items-center flex-wrap gap-2">
          <div className="max-w-[638px] w-1/2">
            <Search icon={<BiSolidUserDetail size={24} />} className="mr-2" placeholder="Student full name" />
          </div>
          <SearchableSelect
            value="all"
            onChange={() => {}}
            options={[
              {label: t(`pages.course.all_statuses`), value: 'all'},
              {label: `Not started    1`, value: 'not-started'},
              {label: `In progress    0`, value: 'in-progress'},
              {label: `Complete    1`, value: 'complete'},
              {label: `Failed    0`, value: 'failed'},
            ]}
          />
          <Select
            className="w-[200px] mb-2"
            option={[
              {label: t(`pages.course.all_statuses`), value: 'All statuses'},
              {label: `Not started    1`, value: 'not-started'},
              {label: `In progress    0`, value: 'in-progress'},
              {label: `Complete    1`, value: 'complete'},
              {label: `Failed    0`, value: 'failed'},
            ]}
          />
          <Button
            title={t(`pages.course.student_management`)}
            size="sm"
            icon={<i className="icn icn-users_add text-[24px]" />}
            noSpaceBetweenIcon
            onClick={() => setIsOpenManageStudents(true)}
            className="p-0 px-2.5"
          />
          <Button
            title={t(`pages.course.reposts_on_the_course`)}
            size="sm"
            icon={<i className="icn icn-report_csv text-[24px]" />}
            noSpaceBetweenIcon
            className="p-0 px-2.5"
            onClick={() => setIsRepostsCourse(true)}
          />
          <Modal
            open={isRepostsCourse}
            close={() => setIsRepostsCourse(false)}
            footerVisible={false}
            className="w-[600px] text-center"
          >
            <div className="md:px-7 pb-5">
              <h1 className="text-[35px] font-normal">Reports on the course</h1>
              <p className="text-[17px] my-6">Select a report you are interested in and click on it to download</p>
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-[112px] hover:text-blue-600 cursor-pointer">
                  <i className="icn icn-course text-[40px]" />
                  <p className="mx-auto">General on the course</p>
                </div>
                <div className="w-[112px] hover:text-blue-600 cursor-pointer">
                  <i className="icn icn-completestate text-[40px]" />
                  <p className="mx-auto">Completion status</p>
                </div>
                <div className="w-[112px] hover:text-blue-600 cursor-pointer">
                  <i className="icn icn-test text-[40px]" />
                  <p className="mx-auto">The tests results</p>
                </div>
                <div className="w-[112px] hover:text-blue-600 cursor-pointer">
                  <i className="icn icn-questiontext text-[40px]" />
                  <p className="mx-auto">Answers to the tasks</p>
                </div>
              </div>
            </div>
          </Modal>
          <Sidebar open={isOpenManageStudents} close={() => setIsOpenManageStudents(false)} className="min-w-[80%]">
            <div>
              <div className="flex-nowrap flex items-center justify-between px-7">
                <h2 className="text-[34px] font-bold">{t(`pages.course.manage_trainers`)}</h2>
                <div className="flex items-center justify-center">
                  <Button onClick={() => setIsOpenManageStudents(false)}>{t('common.cancel')}</Button>
                  <Button theme="primary">{t('common.save')}</Button>
                </div>
              </div>
              <div className="p-[14px]">
                <Swap availableData={AVAILABLE_DATA} onAssignedChange={users => console.warn(users)} />
              </div>
            </div>
          </Sidebar>
        </div>
        <div>
          <StudentsTable />
        </div>
      </div>
    </div>
  )
}
