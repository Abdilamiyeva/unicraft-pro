
interface ProgramCardProps {
  name: string;
  id: number;
  text: string;
}

export const TABLE_HEADERS = ['Group name', 'Managers', 'Trainers', 'Students', 'Programs', 'Courses']

export const USERS = [
  {
    id: 1,
    groupName: {
      team: 'frontend team',
      office: 'TenX Office',
      
    },
    manager: {
      user: 'Test user',
      count: 1,
    },
    trainers: ' ',
    students: 0,
    programs: 1,
    courses: 1,
  },
  {
    id: 2,
    groupName: {
      team: 'Group #1',
      office: 'Lorem ipsum dolor',
      icon: 'notranslate icn icn-selfregister',
    },
    manager: {
      user: 'Leo',
    },
    trainers: ' ',
    students: 0,
    programs: 2,
    courses: 0,
  },
]

export const AVAILABLE_DATA = [
  {
    id: '1',
    name: '1',
    email: '1@gmail.com',
    isChecked: false,
    isOnline: false,
  },
  {
    id: '2',
    name: '2',
    email: '2@gmail.com',
    isChecked: false,
    isOnline: false,
  },
  {
    id: '3',
    name: '3',
    email: '3@gmail.com',
    isChecked: false,
    isOnline: false,
  },
  {
    id: '4',
    name: '4',
    email: '4@gmail.com',
    isChecked: false,
    isOnline: false,
  },
  {
    id: '5',
    name: '5',
    email: '5@gmail.com',
    isChecked: false,
    isOnline: false,
  },
]


export const PROGRAMS_COURSES_DATA: ProgramCardProps[] = [
  { name: "Program name", id: 1, text: "Courses in the program: 0" },
  { name: "fdsf", id: 2, text: "Courses in the program: 1" },
  { name: ",.d", id: 3, text: "Courses in the program: 2" },
  { name: ",.d", id: 4, text: "Courses in the program: 3" },
  { name: ",.d", id: 5, text: "Courses in the program: 4" },
];