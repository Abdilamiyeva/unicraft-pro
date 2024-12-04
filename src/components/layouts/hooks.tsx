import {USER_ROLE} from '@/constants'
import {useTranslation} from 'react-i18next'

export const useGetRoles = () => {
  const {t} = useTranslation()

  return [
    {
      icon: <i className="icn icn-role-admin text-[21.5px] h-[25px]" />,
      title: t('layout.sidebar.profile.roles.admin'),
      role: USER_ROLE.ADMIN,
    },
    {
      icon: <i className="icn icn-role-manager text-[21.5px] h-[25px]" />,
      title: t('layout.sidebar.profile.roles.manager'),
      role: USER_ROLE.MANAGER,
    },
    {
      icon: <i className="icn icn-role-trainer text-[21.5px] h-[25px]" />,
      title: t('layout.sidebar.profile.roles.trainer'),
      role: USER_ROLE.TRAINER,
    },
    {
      icon: <i className="icn icn-role-student text-[21.5px] h-[25px]" />,
      title: t('layout.sidebar.profile.roles.student'),
      role: USER_ROLE.STUDENT,
    },
  ]
}

export const useGetSideBarLinks = () => {
  const {t} = useTranslation()

  return [
    {
      link: '/news',
      role: ['ADMIN', 'MANAGER', 'TRAINER', 'STUDENT'],
      icon: <i className="icn icn-news text-[31.5px] h-[31.2px] align-middle" />,
      title: t('layout.sidebar.sidebar_links.news'),
    },
    {
      link: '/courses',
      role: ['ADMIN', 'MANAGER', 'TRAINER'],
      icon: <i className="icn icn-course text-[31.5px] h-[31.2px] align-middle" />,
      title: t('layout.sidebar.sidebar_links.courses'),
    },
    {
      link: '/programs',
      role: ['ADMIN', 'MANAGER'],
      icon: <i className="icn icn-task text-[31.5px] h-[31.2px] align-middle" />,
      title: t('layout.sidebar.sidebar_links.programs'),
    },
    {
      link: '/groups',
      role: ['ADMIN', 'MANAGER'],
      icon: <i className="icn icn-group text-[31.5px] h-[31.2px] align-middle" />,
      title: t('layout.sidebar.sidebar_links.groups'),
    },
    {
      link: '/users',
      role: ['ADMIN', 'MANAGER'],
      icon: <i className="icn icn-users text-[31.5px] h-[31.2px] align-middle" />,
      title: t('layout.sidebar.sidebar_links.users'),
    },
    {
      link: '/task-verification',
      role: ['TRAINER'],
      icon: <i className="icn icn-taskcheck text-[31.5px] h-[31.2px] align-middle" />,
      title: t('layout.sidebar.sidebar_links.task_verification'),
    },
    {
      link: '/learning',
      role: ['STUDENT'],
      icon: <i className="icn icn-desk text-[31.5px] h-[31.2px] align-middle" />,
      title: t('layout.sidebar.sidebar_links.learning'),
    },
  ]
}
