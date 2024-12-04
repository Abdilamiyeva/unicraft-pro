import {Route, Routes} from 'react-router-dom'
import {CoursePage, LoginPage, NewsPage, ProgramsPage, RestorePasswordPage, UsersPage} from './components/pages'
import {NewsEdit, NewsSingle} from './components/pages/news/components'
import {ProgramsCourseEdit, ProgramsCreate, ProgramsSingle} from './components/pages/programs/components'
import {ProfilePage} from './components/pages/profile'
import {EditProfile} from './components/pages/profile/components/edit-profile'
import {CoursesPage} from './components/pages/courses'
import {CourseCreation} from './components/pages/courses/course-create'
import {CourseEdit} from './components/pages/courses/course-edit'
import {GroupsPage} from './components/pages/groups/groups'
import {CreateGroup} from './components/pages/groups/group-create'
import {EditGroup} from './components/pages/groups/group-edit'
import {ImportUsersPage} from './components/pages/users/import-users'
import {LearningPage} from './components/pages/learning'
import {CoursePage as LearningCoursePage} from './components/pages/learning/course'
import {Lessons} from './components/pages/courses/lessons'

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<CoursesPage />} />
    <Route path="/learning" Component={LearningPage} />
    <Route path="/learning/course" Component={LearningCoursePage} />

    {/* Profile page */}
    <Route path="/profile">
      <Route index Component={ProfilePage} />
      <Route path="edit" Component={EditProfile} />
    </Route>

    {/* News page */}
    <Route path="/news">
      <Route index Component={NewsPage} />
      <Route path="edit" Component={NewsEdit} />
      <Route path=":id" Component={NewsSingle} />
      <Route path=":id/edit" Component={NewsEdit} />
    </Route>

    {/* Courses page */}
    <Route path="/courses">
      <Route index Component={CoursesPage} />
      <Route path=":id" Component={CoursePage} />
      <Route path="course-create" Component={CourseCreation} />
      <Route path="course-edit" Component={CourseEdit} />
    </Route>

    {/* Profile page */}
    <Route path="/profile">
      <Route index Component={ProfilePage} />
      <Route path="edit" Component={EditProfile} />
    </Route>
    <Route path="/courses" Component={CoursesPage} />

    {/* Groups page */}
    <Route path="/groups">
      <Route index Component={GroupsPage} />
      <Route path="create" Component={CreateGroup} />
      <Route path=":id/edit" Component={EditGroup} />
    </Route>

    <Route path="/lessons" Component={Lessons} />
    <Route path="/users" Component={UsersPage} />

    {/* Programs page */}
    <Route path="/programs">
      <Route index Component={ProgramsPage} />
      <Route path="create" Component={ProgramsCreate} />
      <Route path=":id" Component={ProgramsSingle} />
      <Route path=":id/edit" Component={ProgramsCourseEdit} />
    </Route>

    {/* Users page */}
    <Route path="/users">
      <Route index Component={UsersPage} />
      <Route path="import" Component={ImportUsersPage} />
    </Route>

    {/* Auth Pages */}
    <Route path="/login" Component={LoginPage} />
    <Route path="/restore-password" Component={RestorePasswordPage} />
  </Routes>
)
