import {
  Button,
  Dropdown,
  Image,
  Modal,
  Sidebar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common'
import {PiCertificate, PiEyeLight} from 'react-icons/pi'
import {IoRefresh} from 'react-icons/io5'
import {useTranslation} from 'react-i18next'
import {STUDENT_DATA, isOnline} from '@/components/pages/course/mock'
import {useState} from 'react'
import {FaCheck} from 'react-icons/fa6'
import {AiOutlineFileText} from 'react-icons/ai'

export const StudentsTable = () => {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState(false)
  const {t} = useTranslation()

  return (
    <div>
      <Table>
        <TableHeader className="font-bold">
          <TableRow className="text-start">
            <TableHead></TableHead>
            <TableHead>{t(`pages.course.student_full_name`)}</TableHead>
            <TableHead>{t(`pages.course.points`)}</TableHead>
            <TableHead>{t(`pages.course.efficiency`)}</TableHead>
            <TableHead>{t(`pages.course.medals`)}</TableHead>
            <TableHead>{t(`pages.course.retakes`)}</TableHead>
            <TableHead></TableHead>
            <TableHead>{t(`pages.course.assigned`)}</TableHead>
            <TableHead>{t(`pages.course.started`)}</TableHead>
            <TableHead>{t(`pages.course.finished`)}</TableHead>
            <TableHead></TableHead>
            <TableHead>{t(`pages.course.deadline`)}</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {STUDENT_DATA.map(student => (
            <TableRow key={student.id}>
              <TableCell>
                <i className="icn icn-hourglass text-[24.3px]" />
              </TableCell>
              <TableCell className="flex items-center text-start gap-3">
                <div className="w-[42px] h-[42px] relative">
                  <Image
                    src="/images/profile-user-img.svg"
                    alt="User"
                    className="bg-[#8c8c8c] w-[42px] h-[42px] rounded-full pt-2"
                  />
                  <span
                    className={`w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full ${
                      isOnline ? 'bg-[#7cb83d]' : 'bg-[#333333]'
                    }`}
                  />
                </div>
                <div>
                  <h3>{student.name}</h3>
                  <p>{student.email}</p>
                </div>
              </TableCell>
              <TableCell>{student.points}</TableCell>
              <TableCell>{student.efficiency}</TableCell>
              <TableCell>{student.medals}</TableCell>
              <TableCell>{student.retakes}</TableCell>
              <TableCell>
                {student.assignedThroughProgram && (
                  <Button
                    icon={<i className="icn icn-plan text-[32px]" />}
                    noSpaceBetweenIcon
                    title="Assigned through the program"
                    side="top"
                    size="sm"
                    variant="outline"
                    className="border-none"
                  />
                )}
              </TableCell>
              <TableCell>{student.startDate}</TableCell>
              <TableCell>{student.endDate}</TableCell>
              <TableCell>{student.finishedDate}</TableCell>
              <TableCell></TableCell>
              <TableCell>{student.deadline}</TableCell>
              <TableCell>
                <Dropdown
                  trigger={<i className="icn icn-more_v text-[24px]" />}
                  items={[
                    {
                      label: 'Wiew',
                      icon: <PiEyeLight size={18} />,
                      onClick: () => setView(true),
                    },
                    {
                      label: 'Reassign the course',
                      icon: <IoRefresh size={18} />,
                      onClick: () => setOpen(true),
                    },
                    {
                      label: 'Certificate',
                      icon: <PiCertificate size={18} />,
                    },
                  ]}
                />
                <Modal
                  open={open}
                  close={() => setOpen(false)}
                  footerVisible={false}
                  className="w-[600px] h-[305px] text-center"
                >
                  <h1 className="text-[35px] font-normal">Assign a course for repeated learning</h1>
                  <p className="text-[17px]">All current progress on the course will be reset</p>
                  <div className="flex justify-center gap-2 items-center mt-4">
                    <Button theme="warning" size="md" className="h-12">
                      Reassigned the course
                    </Button>
                    <Button className="h-12" size="md" onClick={() => setOpen(false)}>
                      cancel
                    </Button>
                  </div>
                </Modal>
                <Sidebar
                  open={view}
                  close={() => setView(prev => !prev)}
                  className="min-w-[80%]"
                  title={
                    <div className="flex items-center justify-between text-white w-full">
                      <div className="flex items-center justify-start w-1/2">
                        <div className="w-7 h-7 relative">
                          <Image
                            src="/images/profile-user-img.svg"
                            alt="User"
                            className="bg-[#8c8c8c] w-7 h-7 rounded-full pt-2 overflow-hidden"
                          />
                          <span
                            className={`w-2 h-2 border-2 border-white absolute right-0 bottom-0 rounded-full ${
                              isOnline ? 'bg-[#7cb83d]' : 'bg-[#333333]'
                            }`}
                          />
                        </div>
                        <h3 className="pl-4 font-semibold text-base leading-[1.2]">{student.name}</h3>
                      </div>
                      <div className="w-1/2 text-base">Supervisor mode</div>
                      <div></div>
                    </div>
                  }
                  titleHeaderClassName="bg-[#333] h-[49px]"
                >
                  {!student.isStarted ? (
                    <div className="h-screen flex flex-col items-center justify-center">
                      <div>
                        <p className="text-center text-[12.8px] uppercase">JAVA</p>
                        <h3 className="text-center pt-10 text-[40px] font-normal">Course not started</h3>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-[12.8px] font-normal py-1.5 border-b">JAVA</p>
                      <div className="flex items-center justify-start border-b">
                        <i className="icn icn-success text-[40px] text-blue-600" />
                        <div className="pl-4">
                          <h3 className="text-[19px] font-bold">COURSE PASSED</h3>
                          <p className="text-[12px]">{student.finishedDate}</p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute top-0 left-0 bg-white w-[90px] hover:w-[350px] hover:shadow-right h-[calc(100vh_-_150px)] transition-all duration-200 border-r overflow-hidden">
                          <div className="pl-4 py-2 cursor-pointer relative flex justify-start items-center gap-7 hover:bg-blue-100">
                            <div className="min-w-14 h-14 rounded-full shadow-icon-blue flex items-center justify-center text-center">
                              <i className="icn icn-book text-[32px] mt-1" />
                            </div>
                            <p className="text-[19.44px] font-normal text-nowrap">java introduction</p>
                          </div>
                          <div className="pl-4 py-2 cursor-pointer relative flex justify-start items-center gap-7 hover:bg-blue-100">
                            <div className="min-w-14 h-14 rounded-full shadow-icon-blue flex items-center justify-center text-center">
                              <i className="icn icn-iframe text-[32px] mt-1" />
                            </div>
                            <p className="text-[19.44px] font-normal text-nowrap">Web page</p>
                          </div>
                        </div>
                        <div className="pl-[90px] max-w-[1120px] mx-auto flex justify-stretch flex-col ">
                          <div className="flex items-center gap-3 p-1 rounded-sm shadow-md border border-gray-300 max-w-[1120px] m-2">
                            <div className="flex m-[10px] justify-center items-center min-w-11 h-11 rounded-full bg-[#7cb83d] border-[#7cb83d] text-white text-[20px]">
                              <FaCheck />
                            </div>
                            <div className="border-l-2 px-4 border-r-2 text-center">
                              <span className="text-[17px] font-bold">50</span>
                              <p className="text-xs">Points</p>
                            </div>
                            <div>
                              <h2 className="font-bold">Passed</h2>
                              <span className="text-xs text-[#8c8c8c] text-nowrap">02/23/2024 11:27 AM</span>
                            </div>
                          </div>

                          <div className="p-4 mt-8">
                            <h1 className="text-4xl font-bold">java introduction</h1>
                            <h2 className="text-lg mt-20 font-bold border-dashed border-b-2 pb-4">bu introduction</h2>
                            <div className="p-[14px] mt-3">
                              <a href="#" className="flex items-center gap-3 font-bold text-[14px]">
                                <AiOutlineFileText className="text-[#8c8c8c] text-2xl" />
                                General report on the course Java from 02.09.2024.csv
                              </a>
                              <a href="#" className="flex items-center gap-3 font-bold text-[14px] mt-5">
                                <AiOutlineFileText className="text-[#8c8c8c] text-2xl" />
                                Список пользователей 1626.unicraft.org (1).csv
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Sidebar>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
