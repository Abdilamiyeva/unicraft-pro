import {useState} from 'react'
import {Button, Dropdown, Modal, Search, Sidebar, Tooltip} from '@/components/common'
import {Table} from '@/components/common/table'
import {TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/common/table/components'
import {cn} from '@/utils/lib/utils'
import {UserCard} from './components'
import {USERS} from './mock'
import {useTranslation} from 'react-i18next'
import {useGetTableHeader} from './hooks'
import {Link} from 'react-router-dom'
import {LiaKeySolid} from 'react-icons/lia'

export const UsersPage = () => {
  const TABLE_HEADER = useGetTableHeader()
  const {t} = useTranslation()

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [changeStudentView, setChangeStudentView] = useState<string>('table')
  const [users] = useState(USERS)
  const [searchableUser, setSearchableUser] = useState<string>('')
  const [restorePasswordModal, setRestorePasswordModal] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [openEditSidebar, setOpenEditSidebar] = useState<boolean>(false)

  const filteredUsers = users.filter(user =>
    (user.username || user.email).trim().toLowerCase().includes(searchableUser.trim().toLowerCase()),
  )

  return (
    <div className="flex flex-col pt-[10px]">
      <div className="px-7 py-[21px] flex items-center justify-between">
        <h2 className="text-[29px] font-bold">{t('pages.users.page_title')}</h2>
        <div className="flex items-center gap-1">
          <p className="text-[14px]">{t('pages.users.licenses_available')}</p>
          <button
            onClick={() => setOpenModal(true)}
            className="flex items-center gap-1 font-bold text-[14px] border-b border-dashed border-b-black hover:text-blue-600 hover:border-b-blue-600 cursor-pointer"
          >
            <span>2</span>
            <span>/</span>
            <span>11</span>
          </button>
        </div>
        <div className="flex items-center gap-7">
          <Search placeholder={t('pages.users.search_placeholder')} onChange={e => setSearchableUser(e.target.value)} />
          <div className="flex items-center gap-1">
            <Tooltip
              icon={<i className="icn icn-users_add text-[28px]" />}
              side="bottom"
              title={t('pages.users.tooltip_titles.create_user')}
              defaultStyleOn={true}
            />
            <Tooltip
              icon={
                <Link to="/users/import">
                  <i className="icn icn-import text-[28px]" />
                </Link>
              }
              side="bottom"
              title={t('pages.users.tooltip_titles.import_users')}
              defaultStyleOn={true}
            />
            <Tooltip
              icon={<i className="icn icn-export text-[28px]" />}
              side="bottom"
              title={t('pages.users.tooltip_titles.export_users')}
              defaultStyleOn={true}
            />
            <Tooltip
              icon={
                changeStudentView === 'table' ? (
                  <button onClick={() => setChangeStudentView('block')}>
                    <i className="icn icn-view_table text-[28px]" />
                  </button>
                ) : (
                  <button onClick={() => setChangeStudentView('table')}>
                    <i className="icn icn-view_cards text-[28px]" />
                  </button>
                )
              }
              side="bottom"
              title={
                changeStudentView === 'table'
                  ? t('pages.users.tooltip_titles.table')
                  : t('pages.users.tooltip_titles.block')
              }
              defaultStyleOn={true}
            />
          </div>
        </div>
      </div>
      {filteredUsers.length !== 0 ? (
        <div className="p-7">
          {
            {
              table: (
                <div className="overflow-hidden">
                  <Table className="min-w-max">
                    <TableHeader>
                      <TableRow>
                        {TABLE_HEADER?.map((col, index) => (
                          <TableHead
                            key={index}
                            className={cn('text-left font-bold', {
                              'text-center': col === 'Last visit' || col === 'Registered',
                            })}
                          >
                            {col}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody className="w-full overflow-x-auto">
                      {filteredUsers.map((item, idx) => (
                        <TableRow key={idx} className="cursor-pointer">
                          <TableCell className="w-[238px] font-bold text-left">{item.username}</TableCell>
                          <TableCell className={cn({'text-[#7cb83d]': item.lastVisit})}>
                            {item.lastVisit ? t('common.online') : '02/22/2024 2:35PM'}
                          </TableCell>
                          <TableCell>
                            <Dropdown
                              trigger={<i className="icn icn-more_v text-[21px] h-[21px]" />}
                              items={[
                                {
                                  icon: <i className="icn icn-edit text-[21px] h-[21px]" />,
                                  label: t('pages.users.dropdown.edit'),
                                  onClick: () => setOpenEditSidebar(true),
                                },
                                {
                                  icon: <i className="icn icn-envelope text-[21px] h-[21px]" />,
                                  label: (
                                    <a href="mailto:https://1626.unicraft.org">
                                      {t('pages.users.dropdown.send_email')}
                                    </a>
                                  ),
                                },
                                {
                                  icon: <i className="icn icn-key text-[21px] h-[21px]" />,
                                  label: t('pages.users.dropdown.restore_password'),
                                  onClick: () => setRestorePasswordModal(true),
                                },
                                {
                                  icon: <i className="icn icn-trash text-[21px] h-[21px]" />,
                                  label: t('pages.users.dropdown.delete'),
                                  onClick: () => setDeleteModal(true),
                                },
                              ]}
                              className="mt-[140px] -ml-[10px]"
                              side="right"
                            />
                          </TableCell>
                          <TableCell className="w-[280px] text-left text-[13px]">{item.email}</TableCell>
                          <TableCell className="w-[280px] text-left">.</TableCell>
                          <TableCell className="w-[280px] text-left">{item.role}</TableCell>
                          <TableCell className="w-[280px] text-left">{item.company}</TableCell>
                          <TableCell className="w-[280px] text-left">{item.department}</TableCell>
                          <TableCell className="w-[280px] text-left">{item.position}</TableCell>
                          <TableCell className="w-[160px] text-center">{item.registered}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ),
              block: (
                <div className="flex items-center gap-3 flex-wrap">
                  {filteredUsers.map(user => (
                    <UserCard
                      key={user.username}
                      avatar={user.avatar}
                      username={user.username}
                      email={user.email}
                      isOnline={user.lastVisit}
                      role={user.role}
                    />
                  ))}
                </div>
              ),
            }[changeStudentView]
          }
        </div>
      ) : (
        <div className="flex flex-col items-center w-full justify-center p-7 mt-[66px]">
          <i className="icn icn-search text-[96px] h-[96px]" />
          <h1 className="text-[35px] mt-[42px] mb-6">{t('common.not_found')}</h1>
          <p className="text-[18px]">{t('pages.users.table.not_found_users')}</p>
        </div>
      )}

      <Modal open={openModal} close={() => setOpenModal(false)} footerVisible={false} className="p-7">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[35px]">{t('pages.users.modal.licenses')}</h2>
          <p className="pt-7 pb-[42px]">
            {t('pages.users.modal.contact_technical_support_team')}
            <b className="px-1">8 (800) 350-24-43</b>
            {t('pages.users.modal.sent_request_to')}
            <a href="mailto:https://1626.unicraft.org" className="font-bold px-1">
              email.
            </a>
          </p>
          <Button onClick={() => setOpenModal(false)}>{t('common.ok')}</Button>
        </div>
      </Modal>

      <Modal
        open={restorePasswordModal}
        close={() => setRestorePasswordModal(false)}
        footerVisible={false}
        className="flex flex-col items-center w-[630px]"
      >
        <LiaKeySolid size={90} />
        <h1 className="text-[35px]">{t('pages.users.modal.password_recovery')}</h1>
        <p className="text-center px-12">
          {t('common.user')} <b className="px-1"> Administrator Unicraft 1</b>
          {t('pages.users.modal.receive_email_notifications')}
          <b className="px-1">admin@unicraft.org</b>
          {t('pages.users.modal.reset_password_specify_new_one')}
        </p>
        <div className="flex items-center gap-1 mt-7">
          <Button theme="primary">{t('common.restore')}</Button>
          <Button onClick={() => setRestorePasswordModal(false)}>{t('common.cancel')}</Button>
        </div>
      </Modal>

      <Modal
        open={deleteModal}
        close={() => setDeleteModal(false)}
        footerVisible={false}
        className="flex flex-col items-center w-[630px]"
      >
        <p className="text-[21px]">{t('pages.users.modal.user_permanently_deleted')}</p>
        <div className="flex items-center gap-1">
          <Button theme="danger">{t('common.delete')}</Button>
          <Button onClick={() => setDeleteModal(false)}>{t('common.cancel')}</Button>
        </div>
      </Modal>

      <Sidebar
        open={openEditSidebar}
        close={() => setOpenEditSidebar(false)}
        title="User information"
        titleClassName="text-[14px]"
        className="min-w-[1380px]"
      >
        <h1>User Edit SideBar</h1>
      </Sidebar>
    </div>
  )
}
