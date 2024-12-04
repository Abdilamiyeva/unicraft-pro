import {ProfileWiewUser} from './components/profile-wiew-user'
import {ProfileUserInfo} from './components/profile-wiew-user-info'

export const ProfilePage = () => (
  <div className="flex max-[1248px]:flex-col ">
    <ProfileWiewUser />
    <ProfileUserInfo />
  </div>
)
