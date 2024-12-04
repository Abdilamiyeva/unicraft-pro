import {USER_ROLE} from '@/constants'

export const useVisibility = () => {
  // GET USER
  const user = {
    role: USER_ROLE.ADMIN,
  }

  return {
    courses: {
      page: [USER_ROLE.ADMIN, USER_ROLE.TRAINER].includes(user.role),
      course: {
        page: [USER_ROLE.ADMIN, USER_ROLE.TRAINER].includes(user.role),
      },
    },
  }
}
