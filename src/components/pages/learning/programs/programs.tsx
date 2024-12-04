import {Search, Tabs} from '@/components/common'
import {CourseCard} from '../components/course-card'
import {Link} from 'react-router-dom'

// temp
const hasActiveCourses = false
const hasPassedCourses = true

export const Programs = () => (
  <div className="flex items-center">
    <Tabs
      tabs={[
        {
          id: 'active',
          label: 'Active',
          children: (
            <>
              {hasActiveCourses ? (
                <div className="flex gap-4 pt-2 pb-5">
                  <CourseCard />
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <h1 className="text-4xl mt-24">No active courses</h1>
                </div>
              )}
            </>
          ),
        },
        {
          id: 'passed',
          label: 'Passed',
          children: (
            <>
              {hasPassedCourses ? (
                <div className="flex gap-4 pt-2 pb-5">
                  <Link to={'/learning/course'}>
                    <CourseCard />
                  </Link>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <h1 className="text-4xl mt-24">No passed courses</h1>
                </div>
              )}
            </>
          ),
        },
        {
          id: 'all',
          label: 'All',
          children: (
            <div className="flex gap-4 pt-2 pb-5">
              <Link to={'/learning/course'}>
                <CourseCard />
              </Link>
            </div>
          ),
        },
      ]}
    />
    <Search placeholder="Search for programs" />
  </div>
)
