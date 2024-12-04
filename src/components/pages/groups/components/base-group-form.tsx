import {Button, Input, Switch, Textarea} from '@/components/common'
import {Fragment, useState} from 'react'

export const BaseGroupForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  return (
    <Fragment>
      <div className="">
        <h3 className="mt-14 mb-7 border-b border-[#ebebeb] pb-2 text-xl text-[#333] font-light font-open-sans leading-5 ">
          GENERAL INFO
        </h3>
        <Input label="Group name" className="py-7 mb-5" placeholder="Group name" />
        <Input label="Group address" className="py-5 mb-5" placeholder="Group address" />
        <Textarea title="comment" placeholder="Comment" />
        <h3 className="mt-10 mb-7 border-b border-[#ebebeb] pb-2 text-xl text-[#333] font-light font-open-sans leading-5 ">
          REGISTRATION IN THE GROUP
        </h3>
        <Switch
          checked={isChecked}
          onCheckedChange={() => setIsChecked(!isChecked)}
          label="Individual registration"
          text="Users will be able to register at the link and join this group"
        />
        {isChecked && <div> Date Picker </div>}
      </div>
      <div className="mt-5">
        <hr className="my-7" />
        <div className="mx-7 mb-7 flex justify-between items-center">
          <div className="flex ">
            <Button theme="primary">Save</Button>
            <Button>Cancel</Button>
          </div>
          <Button theme="danger" disabled>
            DELETE
          </Button>
        </div>
      </div>
    </Fragment>
  )
}
