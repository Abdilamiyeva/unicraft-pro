export const mockSections: any = [
  {
    sectionTitle: 'Backend',
    description: 'Backend Course Introduction',
    courses: [
      {
        courseID: '1',
        imgUrl: '/images/girls_2.jpg',
        title: 'Node JS for beginner',
        shortDescription:
          'lorem ipsum, lorem ispum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        description: 'lorem lorem lorem lorem lorem lorem lorem',
      },
      {
        courseID: '2',
        imgUrl: '/images/placeholder.jpg',
        title: 'Chat app using web sockets',
        shortDescription:
          'hello lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
      },
    ],
  },
  {
    sectionTitle: 'Javascript',
    description: 'JavaScript Course Introduction',
    courses: [
      {
        courseID: '3',
        imgUrl: '/images/placeholder.jpg',
        title: 'Javascript Introduction',
        shortDescription: '',
        description: 'lorem lorem lorem lorem lorem lorem lorem',
      },
    ],
  },
]

export const mockOptions = [
  {value: 'backend', label: 'Backed'},
  {value: 'dasturlash', label: 'Dasturlash'},
  {value: 'marketing', label: 'Marketing'},
  {value: 'New section ', label: 'New section'},
]

export const theoryArr = [
  {name: 'PDF', value: '1'},
  {name: 'Text', value: '1'},
  {name: 'Audio', value: '1'},
  {name: 'Video', value: '1'},
  {name: 'Google Docs', value: '1'},
  {name: 'Web', value: '1'},
  {name: 'Zoom', value: '1'},
  {name: 'Tilda', value: '1'},
  {name: 'Scorm', value: '1'},
]

export const testArr = [
  {name: 'Одиночный ответ', check: 'правильный', value: '1'},
  {check: 'неправильный', value: '0'},
  {name: 'Множественный ответ', check: 'правильный', value: '1'},
  {check: 'частичный', value: '0'},
  {check: 'неправильный', value: '0'},
  {name: 'Matching', check: 'правильный', value: '0'},
  {check: 'неправильный', value: '1'},
  {name: 'Sequence', check: 'правильный', value: '1'},
  {check: 'правильный', value: '0'},
]
