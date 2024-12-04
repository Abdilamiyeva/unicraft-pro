import {useTranslation} from 'react-i18next'

export const useGetTableHeader = () => {
  const {t} = useTranslation()

  return [
    t('pages.users.table.header.user'),
    t('pages.users.table.header.last_visit'),
    '',
    t('pages.users.table.header.email'),
    t('pages.users.table.header.login'),
    t('pages.users.table.header.role'),
    t('pages.users.table.header.company'),
    t('pages.users.table.header.department'),
    t('pages.users.table.header.position'),
    t('pages.users.table.header.registered'),
  ]
}
