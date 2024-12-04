import React, {useEffect, useState} from 'react'
import {Checkbox} from '../checkbox'
import {Button} from '../button'
import {Search} from '../search'
import {cn} from '@/utils/lib/utils'
import {Props, UserInfo} from './types'
import {BsSearch} from 'react-icons/bs'

export const Swap: React.FC<Props> = ({
  contentClassName,
  assignedData,
  availableData,
  onAssignedChange,
  isWithButtons,
}) => {
  const [available, setAvailable] = useState<UserInfo[]>(availableData || [])
  const [assigned, setAssigned] = useState<UserInfo[]>(assignedData || [])
  const [availableCheckedCount, setAvailableCheckedCount] = useState<number>(0)
  const [assignedCheckedCount, setAssignedCheckedCount] = useState<number>(0)
  const [allAvailableChecked, setAllAvailableChecked] = useState<boolean>(false)
  const [allAssignedChecked, setAllAssignedChecked] = useState<boolean>(false)

  useEffect(() => {
    setAvailableCheckedCount(available.filter(item => item.isChecked).length)
    setAllAvailableChecked(!available.length ? false : available.every(item => item.isChecked))
  }, [available])

  useEffect(() => {
    setAssignedCheckedCount(assigned.filter(item => item.isChecked).length)
    setAllAssignedChecked(!assigned.length ? false : assigned.every(item => item.isChecked))
  }, [assigned])

  const handleCheckboxChange = (id: string, type: string) => {
    switch (type) {
      case 'available':
        setAvailable(prevAvailable =>
          prevAvailable.map(item => (item.id === id ? {...item, isChecked: !item.isChecked} : item)),
        )
        break
      case 'assigned':
        setAssigned(prevAssigned =>
          prevAssigned.map(item => (item.id === id ? {...item, isChecked: !item.isChecked} : item)),
        )
        break
      default:
        break
    }
  }

  const handleAllChecked = (e: boolean, type: string) => {
    switch (type) {
      case 'available':
        setAvailable(prevAvailable => {
          prevAvailable.forEach(item => (item.isChecked = e))
          return prevAvailable
        })
        setAllAvailableChecked(e)
        setAvailableCheckedCount(e ? available.length : 0)
        break
      case 'assigned':
        setAssigned(prevAssigned => {
          prevAssigned.forEach(item => (item.isChecked = e))
          return prevAssigned
        })
        setAllAssignedChecked(e)
        setAssignedCheckedCount(e ? assigned.length : 0)
        break
      default:
        break
    }
  }

  const handleNext = () => {
    const specifiedAvailable = available.filter(a => a.isChecked === true)
    const newAssigned = [...assigned, ...specifiedAvailable]

    setAssigned(newAssigned)
    setAvailable(prevAvailable => prevAvailable.filter(a => !a.isChecked))

    setAssignedCheckedCount(0)
    setAvailableCheckedCount(0)
    setAllAvailableChecked(false)

    setAvailable(prevAvailable => prevAvailable.map(user => ({...user, isChecked: false})))

    if (onAssignedChange) {
      onAssignedChange(newAssigned, available)
    }
  }

  const handlePrev = () => {
    const specifiedAssigned = assigned.filter(a => a.isChecked === true)

    setAvailable(prevAvailable => [...prevAvailable, ...specifiedAssigned])

    setAssigned(prevAssigned => prevAssigned.filter(a => !a.isChecked))

    setAssignedCheckedCount(0)
    setAvailableCheckedCount(0)
    setAllAssignedChecked(false)

    setAssigned(prevAssigned => prevAssigned.map(user => ({...user, isChecked: false})))

    if (onAssignedChange) {
      onAssignedChange(assigned, [...available, ...specifiedAssigned])
    }
  }

  return (
    <div>
      <div>
        <div className="flex items-center gap-4">
          <Search
            className="py-2.5"
            icon={<BsSearch />}
            placeholder="Search (Name, email, login, company, department, position)"
          />
          {isWithButtons && (
            <div className="flex items-center">
              <Button>CANCEL</Button>
              <Button theme="primary">Save</Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div
          className={cn(
            'w-full flex flex-col shadow-md bg-white m-2 rounded-[4px] border min-h-[450px]',
            contentClassName,
          )}
        >
          <div className="border-b-[1px] text-[13px] uppercase text-black flex items-center">
            <Checkbox
              className="mx-5 my-4"
              checked={allAvailableChecked}
              onChange={(e: boolean) => handleAllChecked(e, 'available')}
            />
            AVAILABLE:{' '}
            <span className="ml-2">
              {availableCheckedCount !== 0 ? availableCheckedCount + ' / ' : ''} {available.length}
            </span>
          </div>
          <div>
            {available.map(({id, isOnline, isChecked, name, email}) => (
              <div className="flex items-center justify-start min-w-[280px]" key={name}>
                <Checkbox
                  className="mx-5 my-4"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(id, 'available')}
                />
                <div className="flex items-center justify-start p-1">
                  <div className="w-[42px] h-[42px] border relative">
                    <span
                      className={`w-3 h-3 border-2 border-white absolute right-1 bottom-1 rounded-full ${
                        isOnline ? 'bg-[#7cb83d]' : 'bg-[#333333]'
                      }`}
                    />
                  </div>
                  <div className="flex flex-col mx-3.5">
                    <h3 className="text-base font-semibold">{name}</h3>
                    <p className="text-[#8c8c8c] text-[13px] leading-tight">{email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <Button
            theme={availableCheckedCount !== 0 ? 'primary' : 'default'}
            className="relative"
            onClick={handleNext}
            disabled={availableCheckedCount === 0}
          >
            →
            {availableCheckedCount !== 0 && (
              <span className="absolute -top-3 -right-2 px-2.5 py-0.5 rounded-full bg-[#ebebeb] text-[#333333]">
                {availableCheckedCount}
              </span>
            )}
          </Button>
          <Button
            theme={assignedCheckedCount !== 0 ? 'primary' : 'default'}
            className="relative"
            onClick={handlePrev}
            disabled={assignedCheckedCount === 0}
          >
            ←
            {assignedCheckedCount !== 0 && (
              <span className="absolute -top-3 -right-2 px-2 py-0.5 rounded-full bg-[#ebebeb] text-[#333333]">
                {assignedCheckedCount}
              </span>
            )}
          </Button>
        </div>
        <div
          className={cn(
            'w-full flex flex-col shadow-md bg-white m-2 rounded-[4px] border min-h-[450px]',
            contentClassName,
          )}
        >
          <div className="border-b-[1px] text-[13px] uppercase text-black flex items-center">
            <Checkbox
              className="mx-5 my-4"
              checked={allAssignedChecked}
              onChange={(e: boolean) => handleAllChecked(e, 'assigned')}
            />
            ASSIGNED:{' '}
            <span className="ml-2">
              {assignedCheckedCount !== 0 ? assignedCheckedCount + ' / ' : ''} {assigned.length}
            </span>
          </div>
          <div>
            {assigned.map(({id, isOnline, isChecked, name, email}) => (
              <div className="flex items-center justify-start min-w-[280px]" key={name}>
                <Checkbox
                  className="mx-5 my-4"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(id, 'assigned')}
                />
                <div className="flex items-center justify-start p-1">
                  <div className="w-[42px] h-[42px] border relative">
                    <span
                      className={`w-3 h-3 border-2 border-white absolute right-1 bottom-1 rounded-full ${
                        isOnline ? 'bg-[#7cb83d]' : 'bg-[#333333]'
                      }`}
                    />
                  </div>
                  <div className="flex flex-col mx-3.5">
                    <h3 className="text-base font-semibold">{name}</h3>
                    <p className="text-[#8c8c8c] text-[13px] leading-tight">{email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
