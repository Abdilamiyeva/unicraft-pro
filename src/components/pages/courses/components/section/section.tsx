/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import {Button} from '@/components/common'
import {cn} from '@/utils/lib/utils'
import {OptionI, Props, SectionI} from './types'
import {mockSections} from '../../mock/sections'
import {useTranslation} from 'react-i18next'
import {SectionForm} from '@/components/common/section-form'

export const Section: React.FC<Props> = ({setCurrentSection}) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0)
  const [openSectionModal, setOpenSectionModal] = useState<boolean>(false)
  const [addedSection, setAddedSection] = useState<SectionI | undefined>(undefined)

  const {t} = useTranslation()

  const sectionItem = (options: OptionI) => {
    const {title, numberOfCourses, activeIndex} = options

    return (
      <div
        className={cn(
          'flex items-center justify-between py-[14px] px-7 cursor-pointer hover:bg-blue-100 border-r-[3px] border-transparent h-[50px] gap-1 overflow-hidden',
          {
            'border-r-blue-600 bg-blue-100': activeSectionIndex === activeIndex,
            'mb-5': activeIndex === 0,
          },
        )}
      >
        <h2 className="text-[17px] font-medium leading-[22px]">{title}</h2>
        <span className="text-[#75797D] text-sm">{numberOfCourses}</span>
      </div>
    )
  }

  const setNewSectionFormData = (value: SectionI) => {
    setAddedSection({sectionTitle: value.name, description: value.description, courses: []})
  }

  const totalCourses = mockSections.reduce((acc: number, section: any) => acc + section.courses.length, 0)
  const allCoursesObj: any = {sectionTitle: 'All courses', courses: [...mockSections], coursesSum: totalCourses}

  useEffect(() => {
    setCurrentSection(allCoursesObj)
  }, [])

  return (
    <>
      <div className="w-[346px] fixed left-[84px] h-screen overflow-hidden">
        <div className="overflow-y-auto p-7 h-[90%] border-r border-[#EBEBEB] relative">
          {[allCoursesObj, ...mockSections, addedSection].map((section, idx) => (
            <div
              key={idx}
              onClick={() => {
                setActiveSectionIndex(idx)
                setCurrentSection(section)
              }}
            >
              {sectionItem({
                title: section?.sectionTitle,
                numberOfCourses: idx === 0 ? section?.coursesSum : section?.courses.length,
                activeIndex: idx,
              })}
            </div>
          ))}
        </div>
        <div className="h-[74px] px-6 flex items-center justify-center">
          <Button onClick={() => setOpenSectionModal(true)} className="w-full font-semibold tracking-tighter">
            {t('pages.courses.section_add')}
          </Button>
        </div>
      </div>
      <SectionForm
        className="w-1/2"
        open={openSectionModal}
        close={() => setOpenSectionModal(false)}
        getForm={setNewSectionFormData}
      />
    </>
  )
}
