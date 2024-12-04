export interface Props {
  setCurrentSection: (section: any) => void
}

export interface OptionI {
  title: string
  numberOfCourses: number
  activeIndex: number
}

export interface SectionI {
  name?: string
  description?: string
  sectionTitle?: string
  courses?: array[]
}
