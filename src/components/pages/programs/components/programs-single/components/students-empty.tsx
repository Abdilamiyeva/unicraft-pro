import {Button} from '@/components/common'

export const StudentsEmpty = () => (
  <div className="flex items-center flex-col gap-4 mt-20 ">
    <i className="notranslate icn icn-mortarboard text-[112px]"></i>
    <h2 className="text-[32px] font-bold -mt-10">No students</h2>
    <p>No user assigned</p>
    <Button icon={<i className="notranslate icn icn-users_add text-[28px]" />}>STUDENT MANAGEMENT</Button>
  </div>
)
