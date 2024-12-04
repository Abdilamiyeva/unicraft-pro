import {Link} from 'react-router-dom'
import {BaseGroupForm} from '../components/base-group-form'
import {Button} from '@/components/common'

export const CreateGroup = () => (
  <div className="mx-8">
    <div className="flex mt-8 justify-between items-center">
      <h2 className="text-3xl font-semibold font-open-sans leading-5">Create group</h2>
      <Link to="/groups">
        <Button>Cancel</Button>
      </Link>
    </div>

    <BaseGroupForm />
  </div>
)
