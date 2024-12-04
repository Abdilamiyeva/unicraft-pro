export interface MockTypes {
  id: string
  title: string
  description: string
  isAdd: boolean
  index: number
}
export interface Props {
  idx: number
  mock: MockTypes
  mockData: MockTypes[]
  setMockData: any
  addedData: MockTypes[]
}

export interface PropsCourse {
  value: MockTypes[]
}
