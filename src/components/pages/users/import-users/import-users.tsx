import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {Table} from '@/components/common/table'
import {TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/common/table/components'
import {Modal, Search, Tooltip} from '@/components/common'

export const ImportUsersPage = () => {
  const {t} = useTranslation()
  const [csvData, setCsvData] = useState<string[][]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [copyText] = useState<string>('a67413c4-8432-4b98-8a91-6c15d0b301a6')

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    const text = await file.text()
    const lines = text.split('\n')
    const data: string[][] = lines.map(line => line.split(','))
    setCsvData(data)
  }

  const copyClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.warn('Successfully Copy text!')
      },
      err => {
        console.error('Unable to copy text', err)
      },
    )
  }

  return (
    <div className="p-7">
      <Link
        to="/users"
        className="uppercase text-[11.2px] hover:text-blue-600 transition-colors duration-300 ease-in-out"
      >
        {t('pages.users.users_import.users')}
      </Link>
      <h2 className="text-[30px] my-[14px] font-bold">{t('pages.users.users_import.page_title')}</h2>
      <p className="text-[17px]">{t('pages.users.users_import.page_description')}</p>
      <div className="border border-dashed border-[#e6e6e6] rounded-md w-full flex flex-col my-[80px] items-start justify-center hover:border-[#cfcfcf] transition-colors duration-300 ease-in-out">
        <label htmlFor="file" className="cursor-pointer w-full h-full pt-7 px-7 pb-2 group">
          <div className="flex flex-col items-center">
            <i className="icn icn-fileChoose text-[70px] h-[80px] mb-8 group-hover:text-blue-600 transition-colors duration-300 ease-in-out" />
            <h2 className="text-[13px] font-semibold">{t('pages.users.users_import.no_file_selected')}</h2>
            <p className="pt-1 text-[#8c8c8c] text-[14px]">{t('pages.users.users_import.click_to_select_file')}</p>
          </div>
          <input type="file" accept=".csv" hidden id="file" onChange={handleFileUpload} />
        </label>
      </div>
      {csvData.length > 0 && (
        <div className="overflow-hidden">
          <Table className="min-w-max">
            <TableBody className="w-full overflow-x-auto">
              {csvData.map((row, rowIdx) => (
                <TableRow key={rowIdx} className="cursor-pointer">
                  {row.map((cell, cellIdx) => (
                    <TableCell className="text-start" key={cellIdx}>
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      <div className="flex items-start justify-between w-full">
        <div className="w-full border-l-2 border-[#7cb83d] shadow-border-shadow-left py-7 pl-7 pr-8">
          <div className="flex items-start justify-between w-full relative pb-2">
            <h2 className="text-[19px] font-semibold">
              {t('pages.users.users_import.import_algorithm.section_title')}
            </h2>
            <i className="icn icn-check text-[56px] absolute right-0 -top-8 text-[#7CB83D] opacity-25" />
          </div>
          <div className="flex items-center gap-5 pl-2 py-[14px]">
            <span className="font-bold opacity-50">1</span>
            <div className="flex items-center gap-1">
              <p className="capitalize text-[14px]">{t('common.open')}</p>
              <a href="" target="_blank" className="font-bold underline text-[14px]">
                {t('pages.users.users_import.import_algorithm.template_file')}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-5 pl-2 py-[14px] border-y w-full">
            <span className="font-bold opacity-50">2</span>
            <div className="flex items-center gap-1">
              <p className="text-[14px]">{t('pages.users.users_import.import_algorithm.create_your_own_file')}:</p>
              <p className="capitalize text-[14px]">
                {t('common.file')} {'>'}
              </p>
              <p className="text-[14px]">{t('pages.users.users_import.import_algorithm.create_copy')}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 pl-2 py-[14px]">
            <span className="font-bold opacity-50">3</span>
            <div className="flex items-center gap-1">
              <div className="text-[14px]">
                {t('pages.users.users_import.import_algorithm.put_data_file_import')}.
                <button
                  onClick={() => setOpenModal(true)}
                  className="font-bold underline text-[14px] hover:text-blue-600 transition-colors duration-300 cursor-pointer ease-in-out"
                >
                  {t('pages.users.users_import.import_algorithm.show_group_list')}.
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 pl-2 py-[14px] border-y w-full">
            <span className="font-bold opacity-50">4</span>
            <div className="flex items-center gap-1">
              <p className="text-[14px]">{t('pages.users.users_import.import_algorithm.download_file_cv_format')}</p>
              <p className="capitalize text-[14px]">
                {t('common.file')}
                {' > '}
                {t('pages.users.users_import.import_algorithm.save_as')}
                {' > '}
                {t('pages.users.users_import.import_algorithm.cvs_file')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 pl-2 py-[14px]">
            <span className="font-bold opacity-50">5</span>
            <p className="text-[14px]">{t('pages.users.users_import.import_algorithm.download_file_above_area')}</p>
          </div>
          <div className="text-[14px] flex items-center gap-2">
            <p>{t('pages.users.users_import.import_algorithm.required_data')}:</p>
            <span className="font-bold">{`{${t('common.full_name')}},`}</span>
            <span className="font-bold mx-1">{`{${t('common.email')}},`}</span>
            <span className="font-bold">{`{${t('common.role')}},`}</span>
          </div>
          <p className="text-[14px]">{t('pages.users.users_import.import_algorithm.maximum_size_kb')}</p>
        </div>
        <div className="w-full border-l-2 border-[#8c8c8c] shadow-border-shadow-left-grey pl-7 py-7 pr-8">
          <div className="flex items-start justify-between w-full relative pb-7">
            <h2 className="text-[19px] font-semibold">
              {t('pages.users.users_import.types_description.section_title')}
            </h2>
            <i className="icn icn-info text-[56px] absolute text-[#8C8C8C] opacity-25 right-0 -top-9" />
          </div>
          <div className="text-[14px]">
            <span className="font-bold">{`{${t('common.role')}}`}</span>
            <p>{t('pages.users.users_import.types_description.choose_one_following_this')}:</p>
            <div className="pb-[14px]">
              <div className="py-1">
                <span className="font-bold">{t('pages.users.users_import.types_description.admin')}</span>
                {` (${t('common.roles.admin')}) `}
                {' — '}
                {t('pages.users.users_import.types_description.management_users_groups_programs')}
              </div>
              <div className="py-1">
                <span className="font-bold">{t('pages.users.users_import.types_description.manager')}</span>
                {` (${t('common.roles.manager')}) `}
                {' — '}
                {t('pages.users.users_import.types_description.management_assignment_courses')}
              </div>
              <div className="py-1">
                <span className="font-bold">{t('pages.users.users_import.types_description.teacher')}</span>
                {` (${t('common.roles.trainer')}) `}
                {' — '}
                {t('pages.users.users_import.types_description.checking_assignments')}
              </div>
              <div className="py-1">
                <span className="font-bold">{t('pages.users.users_import.types_description.student')}</span>
                {` (${t('common.roles.student')}) `}
                {' — '}
                {t('pages.users.users_import.types_description.learning_courses_programs')}
              </div>
            </div>
            <div>
              <div className="py-[14px] border-t">
                <span className="font-bold">{`{${t('common.email')}}`}</span>
                <p className="py-1">{t('pages.users.users_import.types_description.put_and_send_email_address')}</p>
                <div className="italic text-[#8c8c8c]">
                  {t('pages.users.users_import.types_description.for_ex')}: metaev@company.org
                </div>
              </div>
              <div className="py-[14px] border-y">
                <span className="font-bold">{`{${t('pages.users.users_import.types_description.login')}}`}</span>
                <p className="py-1">{t('pages.users.users_import.types_description.login_or_unique_userID')}</p>
                <div className="italic text-[#8c8c8c]">
                  {t('pages.users.users_import.types_description.e_g')}: metaevco
                </div>
              </div>
              <div className="py-[14px]">
                <span className="font-bold">{`{${t('common.full_name')}}`}</span>
                <p className="py-1">{t('pages.users.users_import.types_description.fullname_users')}</p>
                <div className="italic text-[#8c8c8c]">
                  {t('pages.users.users_import.types_description.for_ex')}: John Doe
                </div>
              </div>
              <div className="py-[14px] border-y">
                <span className="font-bold">{`{${t('pages.users.users_import.types_description.company')}}`}</span>
                <p className="py-1">{t('pages.users.users_import.types_description.company_name')}</p>
                <div className="italic text-[#8c8c8c]">
                  {t('pages.users.users_import.types_description.for_ex')}: Siemens
                </div>
              </div>
              <div className="py-[14px]">
                <span className="font-bold">{`{${t('pages.users.users_import.types_description.department')}}`}</span>
                <p className="py-1">{t('pages.users.users_import.types_description.department_name')}</p>
                <div className="italic text-[#8c8c8c]">
                  {t('pages.users.users_import.types_description.for_ex')}: Sales department
                </div>
              </div>
              <div className="py-[14px] border-y">
                <span className="font-bold">{`{${t('pages.users.users_import.types_description.position')}}`}</span>
                <p className="py-1">{t('pages.users.users_import.types_description.user_post')}</p>
                <div className="italic text-[#8c8c8c]">
                  {t('pages.users.users_import.types_description.for_ex')}: Manager
                </div>
              </div>
              <div className="py-[14px]">
                <span className="font-bold">{`{${t('pages.users.users_import.types_description.comment')}}`}</span>
                <p className="py-1">{t('pages.users.users_import.types_description.any_additional_comment')}</p>
              </div>
              <div className="py-[14px] border-y">
                <span className="font-bold">{`{${t('pages.users.users_import.types_description.manager_department_id')}}`}</span>
                <p className="py-1">{t('pages.users.users_import.types_description.choose_group_manager')}</p>
              </div>
              <div className="py-[14px]">
                <span className="font-bold">{`{${t('pages.users.users_import.types_description.student_department_id')}}`}</span>
                <p className="py-1">{t('pages.users.users_import.types_description.choose_student_group')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal open={openModal} close={() => setOpenModal(false)} footerVisible={false} className="w-[1120px]">
        <h2 className="font-bold text-[22px]">Group List</h2>
        <div className="max-w-[700px]">
          <Search className="w-full" />
        </div>
        <Table className="min-w-max">
          <TableHeader>
            <TableRow>
              <TableHead className="text-left font-bold">Group</TableHead>
              <TableHead className="text-left font-bold">ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-full overflow-x-auto">
            <TableRow className="cursor-pointer">
              <TableCell className="w-[238px] font-bold text-left">Frontend Team</TableCell>
              <TableCell className="w-[280px] text-left text-[14px]">
                <div className="flex items-center gap-1">
                  <p className="font-mono">a67413c4-8432-4b98-8a91-6c15d0b301a6</p>
                  <Tooltip
                    icon={
                      <button onClick={() => copyClipboard(copyText)}>
                        <i className="icn icn-copy text-[21px]" />
                      </button>
                    }
                    title="Copy group ID"
                    side="top"
                    className="border-none p-0 hover:shadow-none hover:bg-inherit bg-inherit"
                  />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="cursor-pointer">
              <TableCell className="w-[238px] font-bold text-left">Group #1</TableCell>
              <TableCell className="w-[280px] text-left text-[14px]">
                <div className="flex items-center gap-1">
                  <p className="font-mono">a67413c4-8432-4b98-8a91-6c15d0b301a6</p>
                  <Tooltip
                    icon={
                      <button onClick={() => copyClipboard(copyText)}>
                        <i className="icn icn-copy text-[21px]" />
                      </button>
                    }
                    title="Copy group ID"
                    side="top"
                    className="border-none p-0 hover:shadow-none hover:bg-inherit bg-inherit"
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Modal>
    </div>
  )
}
