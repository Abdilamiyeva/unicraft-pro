import {Fragment, useState} from 'react'
import {FaBars} from 'react-icons/fa6'
import {Section} from './components/section'
import {Button, Search} from '@/components/common'
import {CourseCard} from './components/course-card'
import {Link} from 'react-router-dom'

export const CoursesPage = () => {
  const [currentSection, setCurrentSection] = useState<any>(undefined)
  const [showSection, setShowSection] = useState<boolean>(true)

  return (
    <div className={`flex ${showSection ? 'ml-[346px]' : ''} relative`}>
      {showSection && <Section setCurrentSection={setCurrentSection} />}
      <div className="w-full h-full">
        <div className="p-[14px] h-[108px] flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div
              className="w-[42px] h-[42px] flex items-center justify-center rounded-full hover:bg-blue-200 cursor-pointer"
              onClick={() => setShowSection(prev => !prev)}
            >
              <FaBars size={20} />
            </div>
            <h1 className="text-3xl font-semibold">{currentSection?.sectionTitle}</h1>
          </div>
          <div className="flex items-center gap-8">
            <Search />
            <div className="flex items-center gap-0.5 pr-3">
              <Link to={'/courses/course-create'}>
                <Button title="Create course" side="bottom" className="w-[53px] h-[42px] p-0">
                  <i className="icn icn-course_add text-3xl mt-1"></i>
                </Button>
              </Link>
              <Button title="Training Summary Report (csv)" side="bottom" className="w-[53px] h-[42px] p-0">
                <i className="icn icn-report_csv text-3xl mt-1"></i>
              </Button>
              <Button
                title="The content structure on the platform (csv)"
                side="bottom"
                className="w-[53px] h-[42px] p-0"
              >
                <i className="icn icn-structure text-3xl mt-1"></i>
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-7 px-4">
          {currentSection?.sectionTitle !== 'All courses' ? (
            <>
              <p className="pl-3">{currentSection?.description}</p>
              <div className="flex items-center">
                {currentSection?.courses.map((course: any) => (
                  <Fragment key={course.courseID}>
                    <div className="p-3">
                      <Link to="/courses/course">
                        <CourseCard course={course} />
                      </Link>
                    </div>
                  </Fragment>
                ))}
              </div>
            </>
          ) : (
            <>
              {currentSection?.courses.map((section: any) => (
                <Fragment key={section.sectionTitle}>
                  <h2 className="p-3 text-[22px] font-light">{section.sectionTitle}</h2>
                  <hr />
                  <div className="flex items-center">
                    {section.courses.map((course: any) => (
                      <div key={course.courseID} className="p-3">
                        <Link to="/courses/course">
                          <CourseCard course={course} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </Fragment>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
