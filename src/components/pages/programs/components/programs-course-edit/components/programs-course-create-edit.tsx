import {Button, Counter, Input, Modal, Switch, Textarea} from '@/components/common'
import React, {useState} from 'react'

export const ProgramsCourseCreateEdit: React.FC = () => {
  const [deleteModal, setDeleteModal] = useState(false)
  return (
    <div className="h-[450px] overflow-y-auto">
      <div className="flex max-[960px]:flex-col gap-7">
        <div className="py-3.5 w-1/2 max-[960px]:w-full">
          <h4 className="font-semibold">Program name</h4>
          <Input placeholder="Program name" className="h-14 mb-5" />
          <h4 className="font-semibold mb-1">Description</h4>
          <Textarea value="" className="w-full" />
          <h4 className="font-semibold mt-4">Completion parameters</h4>
          <p>A condition for accessing the next course of the program</p>
        </div>
        <div className="py-3.5 w-1/2 max-[960px]:w-full">
          <h4 className="font-semibold">Deadline</h4>
          <p>Time period for a student to complete the program</p>
          <div className="flex items-center gap-3 my-2">
            <Counter />
            <p>days</p>
          </div>
          <Switch label="Block access to the program after deadline" checked={true} onCheckedChange={() => {}} />
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <Button theme="primary">SAVE</Button>
        <Button theme="danger" onClick={() => setDeleteModal(true)}>
          DELETE
        </Button>
      </div>
      <Modal open={deleteModal} close={() => setDeleteModal(false)} footerVisible={false}>
        <p className="text-center text-[22px] px-7">Do you really want to permanently delete this program?</p>
        <div className="flex items-center justify-center mt-7">
          <Button theme="danger">DELETE</Button>
          <Button onClick={() => setDeleteModal(false)}>CANCEL</Button>
        </div>
      </Modal>
    </div>
  )
}
