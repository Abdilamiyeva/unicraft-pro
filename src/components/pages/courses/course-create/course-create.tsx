import {Button} from '@/components/common'
import {BaseCourseForm} from '../components/base-course-form'
import {Link} from 'react-router-dom'

export const CourseCreation = () => (
  <div className="px-[120px] mt-10 6xl:px-[120px] 4xl:!px-[60px] 2xl:!px-[30px] ">
    <div className="flex mb-16 justify-between items-center">
      <h2 className="font-bold text-3xl">Course creation</h2>
      <Link to="/courses">
        <Button>Cancel</Button>
      </Link>
    </div>
    <BaseCourseForm btnName="Create" />
  </div>
)
