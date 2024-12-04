/* eslint-disable react-hooks/exhaustive-deps */
import {Props} from './types'
import {Button, Image, Input, Markdown, Search, Tooltip} from '@/components/common'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {cn} from '@/utils/lib/utils'
import {LayoutPopOver} from '..'
import {USER_ROLE} from '@/constants'
import {useTranslation} from 'react-i18next'
import {useGetRoles, useGetSideBarLinks} from '../../hooks'
import {GLOSSARY_TYPE} from '../../constants'

export const MainLayout = ({children}: Props) => {
  const SIDEBAR_LINKS = useGetSideBarLinks()
  const ROLE_LINKS = useGetRoles()
  const navigate = useNavigate()
  const location = useLocation()
  const {t} = useTranslation()

  const [activeLink, setActiveLink] = useState<string>('')
  const [activeRole, setActiveRole] = useState<string>('Administrator')
  const [filteredLinks, setFilteredLinks] = useState<object[]>(SIDEBAR_LINKS)
  const [glossary, setGlossary] = useState<string>(GLOSSARY_TYPE.ALL_GLOSSARY)
  const [changeRole, setChangeRole] = useState<string>(USER_ROLE.ADMIN)
  const [openPopOver, setOpenPopOver] = useState<boolean>(false)
  const [openGlossary, setOpenGlossary] = useState<boolean>(false)
  const [openGroups, setOpenGroups] = useState<boolean>(false)
  const [isEditGlossary, setIsEditGlossary] = useState<boolean>(false)

  const handleChangeRole = (title: string, role: string) => {
    setActiveRole(title)
    setChangeRole(role)
    setOpenPopOver(false)
  }

  const handleChangeNavlink = (item: {title: string; link: string}) => {
    setActiveLink(item.title)
    navigate(item.link)
  }

  const handleEditGlossary = () => {
    setGlossary(GLOSSARY_TYPE.EDIT_CREATE_GLOSSARY)
    setIsEditGlossary(true)
  }
  const handleCreateGlossary = () => {
    setGlossary(GLOSSARY_TYPE.EDIT_CREATE_GLOSSARY)
    setIsEditGlossary(false)
  }

  useEffect(() => {
    const activeLinkData = SIDEBAR_LINKS.find(link => location.pathname.startsWith(link.link))
    setActiveLink(activeLinkData ? activeLinkData.title : '')
  }, [location.pathname, SIDEBAR_LINKS])

  useEffect(() => {
    setFilteredLinks(
      SIDEBAR_LINKS.filter(link => {
        if (link.role.includes(changeRole)) {
          if (!(changeRole === 'MANAGER' && link.title === 'GROUPS')) {
            return link
          }
        }
      }),
    )
  }, [changeRole])

  useEffect(() => {
    if (location.pathname === '/') {
      return navigate('/courses')
    }
  }, [])

  return (
    <div className="flex items-start relative 4xl:flex-col">
      <div className="max-w-[84px] min-w-[84px] w-full h-full bg-[#FAFAFA] fixed left-0 top-0 flex shadow-layout-shadow flex-col items-center pt-1 4xl:max-w-full 4xl:min-w-full 4xl:max-h-[70px] 4xl:min-h-[70px] 4xl:flex-row z-50 4xl:justify-between 4xl:pt-0">
        <div className="w-full flex flex-col items-center 4xl:h-full 4xl:flex-row">
          <div
            className={cn('flex flex-col items-center gap-1 p-[3.5px] cursor-pointer pb-3 4xl:flex-row 4xl:pl-2', {
              'pointer-events-none': openPopOver === true,
            })}
            onClick={() => setOpenPopOver(prev => !prev)}
          >
            <div className="w-[42px] h-[42px] bg-[#8C8C8C] rounded-full border border-gray-500">
              <Image
                src="/layout/profile-user-img.svg"
                alt="user-image"
                className="w-full h-full rounded-full bg-cover mt-2"
              />
            </div>
            <i className="icn icn-role-admin text-[21px] h-[22px]" />
          </div>
          <div className="w-full 4xl:w-[210px] 4xl:h-full 4xl:py-[2px]">
            {changeRole === 'MANAGER' && (
              <div
                className={cn(
                  'flex flex-col items-center pt-1 pb-2 border bg-white hover:text-blue-600 rounded-sm cursor-pointer 4xl:flex-row 4xl:h-full',
                  {
                    'pointer-events-none': openGroups === true,
                  },
                )}
                onClick={() => setOpenGroups(prev => !prev)}
              >
                <i className="icn icn-group text-[30px] h-[37px] 4xl:px-[14px]" />
                <p className="text-[13px] font-semibold">Groups #1</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center w-full 4xl:h-full 4xl:flex-row 4xl:w-max">
          {filteredLinks.map((item: any) => (
            <div
              key={item.title}
              onClick={() => handleChangeNavlink(item)}
              className={cn(
                'flex flex-col items-center py-[7.7px] cursor-pointer hover:text-blue-600 w-full h-full border-r-[3px] border-r-[#FAFAFA] 4xl:w-max 4xl:border-r-0 4xl:border-b-[3px] 4xl:border-b-[#FAFAFA]',
                {
                  'border-r-[3px] border-r-blue-600 text-blue-600 bg-blue-150 4xl:border-b-blue-600':
                    activeLink === item.title,
                },
              )}
            >
              {item.icon}
              <p className="mt-[5px] text-[8px] font-semibold text-center w-[70px] 4xl:w-[84px] 4xl:mt-[8px]">
                {item.title}
              </p>
            </div>
          ))}
          <div className="flex flex-col items-center gap-[10px] fixed bottom-1 w-max 4xl:flex-row 4xl:right-0 4xl:static 4xl:h-full 4xl:gap-7 4xl:px-5 4xl:border-l">
            <div onClick={() => setOpenGlossary(prev => !prev)}>
              <Tooltip
                icon={<i className="icn icn-dictionarysearch text-[25px] w-full" />}
                title="Glossary"
                side="top"
                className="border-none hover:shadow-none hover:text-blue-500 cursor-pointer"
                defaultStyleOn={false}
              />
            </div>
            <Tooltip
              icon={
                <a href="https://www.unicraft.org/blog/en/help/" target="_blank">
                  <i className="icn icn-help text-[25px]" />
                </a>
              }
              title="Help"
              side="top"
              className="border-none hover:shadow-none hover:text-blue-500 cursor-pointer"
              defaultStyleOn={false}
            />
          </div>
        </div>
      </div>

      <LayoutPopOver
        trigger
        close={setOpenPopOver}
        open={openPopOver}
        side="left"
        className="absolute top-0 left-[90px] mt-1 4xl:left-2 4xl:top-[70px]"
      >
        <div className="flex items-center justify-between w-full border-b-2 py-2 pl-7 pr-3">
          <h2>LEO</h2>
          <div className="flex flex-col items-end text-[10px] text-gray-500">
            <span>uLearn</span>
            <span>v2.34.681</span>
          </div>
        </div>
        <div className="w-full">
          <Link
            to="/profile"
            onClick={() => setOpenPopOver(false)}
            className="flex items-center gap-2 py-3 hover:bg-blue-200 px-9 cursor-pointer"
          >
            <i className="icn icn-idcard text-[21px] h-[25px]" />
            <p>{t('layout.sidebar.profile.profile')}</p>
          </Link>
          <div className="my-5">
            {ROLE_LINKS.map(role => (
              <div
                key={role.title}
                className={cn('flex items-center gap-2 py-3 hover:bg-blue-200 px-9 cursor-pointer', {
                  'bg-blue-200 border-r-[3px] border-r-blue-600': activeRole === role.title,
                })}
                onClick={() => handleChangeRole(role.title, role.role)}
              >
                {role.icon}
                <p>{role.title}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 py-3 hover:bg-blue-200 px-9 cursor-pointer">
            <i className="icn icn-exit text-[21px] h-[25px]" />
            <p>{t('layout.sidebar.profile.logout')}</p>
          </div>
        </div>
      </LayoutPopOver>

      <LayoutPopOver
        open={openGlossary}
        close={setOpenGlossary}
        trigger
        side="right"
        className="fixed top-1 left-[90px] h-screen 4xl:h-max pb-7 4xl:left-0 4xl:top-[80px]"
      >
        <div className="flex items-center justify-between w-full px-7 py-[14px] border-b">
          <h2 className="font-bold uppercase text-[15px]">{t('layout.sidebar.sidebar_links.glossary')}</h2>
          <button className="text-2xl hover:text-blue-500 cursor-pointer" onClick={handleCreateGlossary}>
            +
          </button>
        </div>
        <div className="w-full">
          {
            {
              allGlossary: (
                <div className="px-7 pt-4 w-full">
                  <Search />
                  <div className="flex items-center gap-3 pt-10 pl-3">
                    <span className="text-gray-400 font-semibold text-xl">H</span>
                    <button
                      onClick={() => setGlossary(GLOSSARY_TYPE.SINGLE_GLOSSARY)}
                      className="font-bold text-[14px] hover:text-blue-600"
                    >
                      Hello world
                    </button>
                  </div>
                </div>
              ),
              singleGlossary: (
                <div className="px-7 pt-7">
                  <button
                    onClick={() => setGlossary(GLOSSARY_TYPE.ALL_GLOSSARY)}
                    className="uppercase text-[11.2px] hover:text-blue-600 transition-colors duration-300 ease-in-out"
                  >
                    {t('common.back')}
                  </button>
                  <h1 className="text-[35px] font-bold py-[14px]">Hello world</h1>
                  <p className="text-[14px]">Description text</p>
                  <button
                    onClick={handleEditGlossary}
                    className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-300 ease-in-out pt-9 pb-7"
                  >
                    <i className="icn icn-edit text-[21px]" />
                    <p className="capitalize border-b border-dashed text-[14px] border-b-black">{t('common.edit')}</p>
                  </button>
                </div>
              ),
              editCreateGlossary: (
                <div className="w-full">
                  <div className="px-7 pt-7">
                    <h2 className="font-bold text-[22px] mb-8">
                      {isEditGlossary
                        ? t('layout.sidebar.glossary.editing_term')
                        : t('layout.sidebar.glossary.add_term')}
                    </h2>
                    <Input placeholder={t('layout.sidebar.glossary.term_name')} className="mb-4" />
                    <Markdown />
                  </div>
                  <div className="flex items-center justify-between w-full border-t-2 pt-2 mt-8 px-7">
                    {isEditGlossary || (
                      <div className="flex items-center justify-between w-full">
                        <Button theme="primary">{t('layout.sidebar.glossary.add')}</Button>
                        <Button onClick={() => setGlossary(GLOSSARY_TYPE.ALL_GLOSSARY)}>{t('common.cancel')}</Button>
                      </div>
                    )}
                    {isEditGlossary && (
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-1">
                          <Button theme="primary">{t('common.save')}</Button>
                          <Button onClick={() => setGlossary(GLOSSARY_TYPE.ALL_GLOSSARY)}>{t('common.cancel')}</Button>
                        </div>
                        <Button theme="danger">{t('common.delete')}</Button>
                      </div>
                    )}
                  </div>
                </div>
              ),
            }[glossary]
          }
        </div>
      </LayoutPopOver>

      <LayoutPopOver
        open={openGroups}
        close={setOpenGroups}
        trigger
        side="right"
        className="absolute top-1 left-[90px] h-[200px] 4xl:top-[80px] 4xl:left-0"
      >
        <div>
          <h2 className="flex items-center justify-between w-full border-b-2 py-2 pl-7 font-semibold">GROUPS</h2>
          <p className="py-2 pl-7 hover:bg-blue-200">Group #1</p>
        </div>
      </LayoutPopOver>
      <div className="ml-[84px] w-full max-w-[calc(100%-84px)] 4xl:ml-0 4xl:mt-[75px] 4xl:max-w-[calc(100%)]">
        {children}
      </div>
    </div>
  )
}
