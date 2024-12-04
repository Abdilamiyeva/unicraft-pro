import {Button, Dropdown, Modal, Tooltip} from '@/components/common'
import {Table} from '@/components/common/table'
import {TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/common/table/components'
import {useState} from 'react'
import {FaCheck} from 'react-icons/fa6'
import {IoRefresh} from 'react-icons/io5'
import {MdOutlineMaximize} from 'react-icons/md'
import {PiCertificate, PiEyeLight} from 'react-icons/pi'

const mock = [1]

const tableColumns: string[] = [
  '',
  'Course name',
  'Points',
  'Efficiency',
  'Medals',
  'Retakes',
  '',
  'Assigned',
  'Started',
  'Finished',
  'Deadline',
  '',
]

export const ProfileUserInfo = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="p-[16px] w-full">
      <div className="flex justify-between">
        <div className="px-[14px] flex justify-between gap-5">
          <div className="w-[80px] p-[3px] text-[20px] h-[80px] border-[7px] border-[#2f85c6] text-[#2f85c6]  font-semibold rounded-full flex justify-center items-center">
            100%
          </div>
          <div>
            <h2 className="uppercase text-[12px] text-[#7f7f7f] text-left ">Learning</h2>
            <div className="flex gap-11">
              <Tooltip
                className="border-none hover:shadow-none bg-white"
                icon={
                  <div className="pb-[17px] pl-1">
                    <div>
                      <div className="text-[26px] text-left">
                        1
                        <span className="text-[19px] text-[#333333]">
                          <span>/</span>
                          <span className="ml-2">1</span>
                        </span>
                      </div>
                      <h2 className="uppercase mt-1 text-[12px] ">Courses</h2>
                    </div>
                  </div>
                }
                title="100%"
                side={'bottom'}
              />
              <Tooltip
                className="border-none hover:shadow-none bg-white -ml-6"
                icon={
                  <div>
                    <div>
                      <div className="text-[26px] text-left">
                        1
                        <span className="text-[19px] text-[#333333]">
                          <span>/</span>
                          <span className="ml-2">1</span>
                        </span>
                      </div>
                      <h2 className="uppercase mt-1 text-[12px]">Programs</h2>
                    </div>
                  </div>
                }
                title={'100%'}
                side={'bottom'}
              />
            </div>
          </div>
          <div>
            <h1 className="uppercase text-[12px] text-[#7f7f7f] text-left">results</h1>
            <div className="flex items-center gap-4">
              <div className=" flex justify-center items-center gap-4">
                <i className="notranslate icn icn-coin text-4xl -mt-3 ml-2" />
                <span className="text-2xl mt-1">
                  60.0
                  <h2 className="uppercase text-[12px] -mt-2">Points</h2>
                </span>
              </div>
              <div className=" flex justify-center items-center gap-4">
                <i className="notranslate icn icn-profits text-4xl -mt-3" />
                <span className="text-2xl mt-1">
                  100%
                  <h2 className="uppercase text-[12px] -mt-2">EFFICIENCY</h2>
                </span>
              </div>
              <div className=" flex justify-center items-center gap-4">
                <img src="/public/images/certificate-img.svg" alt="images" className="w-9 h-9 -mt-5 ml-2" />
                <span className="text-2xl mt-1">
                  0<h2 className="uppercase text-[12px] -mt-2">MEDALS</h2>
                </span>
                <span className="text-2xl mt-1">
                  0<h2 className="uppercase text-[12px] -mt-2">RETAKES</h2>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Tooltip
          icon={<i className="notranslate icn icn-report_csv" />}
          title="Training Summary Report(csv)"
          side={'top'}
          className="w-14 h-12 text-2xl bg-[#fcfcfc]"
        />
      </div>
      <div className="mt-16">
        <Table>
          <TableHeader>
            <TableRow>
              {tableColumns?.map((col, index) => (
                <TableHead key={index} className={`${index === 1 ? 'w-[200px] text-start' : ''}`}>
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {mock.map((_item, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <div className="flex justify-center items-center w-[33px] h-[33px] rounded-full bg-[#7cb83d] border-[#7cb83d] text-white text-[20px]">
                    <FaCheck />
                  </div>
                </TableCell>
                <TableCell className="w-[200px]">
                  <div className="flex items-center gap-3">
                    <div className="text-left">
                      <h2 className="font-semibold ml-[7px]">Java</h2>
                    </div>
                  </div>
                </TableCell>
                <TableCell>60.0</TableCell>
                <TableCell>100%</TableCell>
                <TableCell>
                  <MdOutlineMaximize className="ml-5" />
                </TableCell>
                <TableCell>
                  <MdOutlineMaximize className="ml-5" />
                </TableCell>
                <TableCell>
                  <Tooltip
                    icon={<i className="notranslate icn icn-plan text-[30px]" />}
                    title="Assigned through the program"
                    side={'top'}
                    className="border-none bg-white hover:bg-white hover:shadow-none"
                  />
                </TableCell>
                <TableCell>02/09/2024</TableCell>
                <TableCell>02/12/2024</TableCell>
                <TableCell>02/14/2024</TableCell>
                <TableCell>
                  <MdOutlineMaximize className="ml-6" />
                </TableCell>
                <TableCell>
                  <Dropdown
                    trigger={<i className="notranslate icn icn-more_v text-2xl" />}
                    items={[
                      {
                        label: 'Wiew',
                        icon: <PiEyeLight />,
                      },
                      {
                        label: 'Reassign the course',
                        icon: <IoRefresh />,
                        onClick: () => setOpen(true),
                      },
                      {
                        label: 'Certificate',
                        icon: <PiCertificate />,
                        onClick: () => {
                          const a = document.createElement('a')
                          a.setAttribute('target', '_blank')
                          a.setAttribute(
                            'href',
                            'https://1626.unicraft.org/certs/ef28273c-3446-4924-a104-f6952d79bb68.pdf',
                          )
                          a.click()
                        },
                      },
                    ]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
      </div>
    </div>
  )
}
