export interface UserInfo {
  id: string
  name: string
  email: string
  isChecked: boolean
  isOnline: boolean
}

export interface Props extends Props {
  assignedData?: UserInfo[]
  availableData?: UserInfo[]
  onAssignedChange?: (assigned: UserInfo[], available: UserInfo[]) => void
  contentClassName?: string
  isWithButtons?: boolean
}
