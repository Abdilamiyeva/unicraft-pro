import {Button, Tabs} from '@/components/common'
import {Description, Reviews, Students, Trainers} from './components'
import {Link} from 'react-router-dom'
import {RiArrowRightSLine} from 'react-icons/ri'
import {useTranslation} from 'react-i18next'

export const CoursePage = () => {
  const {t} = useTranslation()

  return (
    <div>
      <div className="h-[140px] bg-[url('/images/bg-java.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full bg-cover-to-top">
          <div className="max-w-[1260px] mx-auto flex items-center justify-between p-[14px] text-white">
            <div>
              <div className="flex items-center justify-start text-[12px] font-normal py-[7px]">
                <Link to="courses" className="hover:text-blue-600">
                  {t(`layout.sidebar.sidebar_links.courses`)}
                </Link>
                &nbsp;
                <RiArrowRightSLine className="text-base" />
                {t(`pages.course.backend`)}
              </div>
              <h2 className="text-[42px] font-bold">Java</h2>
            </div>
            <div>
              <Button
                icon={<i className="icn icn-edit text-[24px]" />}
                size="sm"
                title={t(`common.edit`)}
                side="bottom"
                noSpaceBetweenIcon
                className="!w-[52px] p-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1260px] mx-auto">
        <Tabs
          variant="outline"
          tabs={[
            {
              label: t(`pages.course.description`),
              id: 'DESCRIPTION',
              children: <Description />,
            },
            {
              label: t(`pages.course.trainers`),
              id: 'TRAINERS',
              children: <Trainers />,
            },
            {
              label: t(`pages.course.students`),
              id: 'STUDENTS',
              children: <Students />,
            },
            {
              label: t(`pages.course.reviews`),
              id: 'REVIEWS',
              children: <Reviews />,
            },
          ]}
        />
      </div>
    </div>
  )
}
