import React, {useState} from 'react'
import {Avatar, Button, Dropdown, Modal, Sidebar} from '@/components/common'
import {cn} from '@/utils/lib/utils'
import {Props} from './types'
import {LiaKeySolid} from 'react-icons/lia'
import {useTranslation} from 'react-i18next'

export const UserCard: React.FC<Props> = ({username, email, role, avatar, isOnline = true}) => {
  const {t} = useTranslation()
  const [restorePasswordModal, setRestorePasswordModal] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [openEditSidebar, setOpenEditSidebar] = useState<boolean>(false)

  return (
    <div className="transition-shadow duration-300 ease-in-out cursor-pointer hover:shadow-user-card-shadow border rounded-sm w-[280px] h-[330px]">
      <div className="text-end pt-[5px] pr-2">
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
              label: <a href="mailto:https://1626.unicraft.org">{t('pages.users.dropdown.send_email')}</a>,
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
          className="mt-[120px] -ml-[10px]"
          side="right"
        />
      </div>
      <h2 className="pb-1 text-[12px] text-center uppercase">{role}</h2>
      <div className="flex flex-col gap-3 items-center mt-6 mb-8">
        <Avatar isOnline={isOnline} src={avatar} alt="avatar-image" />
        <h1 className="font-bold text-[17px]">{username}</h1>
        <span className="text-gray-500 text-[12px]">{email}</span>
      </div>
      <p className={cn('text-[12px] text-gray-500 text-center', {'text-[#7cb83d]': isOnline})}>
        {isOnline ? 'Online' : `Last visit: 02/21/2024 5:58 PM`}
      </p>

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
