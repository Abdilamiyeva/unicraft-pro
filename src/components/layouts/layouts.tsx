import React from 'react'
import {Props} from './types'
import {MainLayout} from './components'
import {MainLayoutRoute} from '@/constants'
import {useLocation} from 'react-router-dom'

export const Layout: React.FC<Props> = ({children}) => {
  const location = useLocation()

  if (Object.values(MainLayoutRoute).includes(location.pathname as MainLayoutRoute)) {
    return <div>{children}</div>
  }
  return <MainLayout>{children}</MainLayout>
}
