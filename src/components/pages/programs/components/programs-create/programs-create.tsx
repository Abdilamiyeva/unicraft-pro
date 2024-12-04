import {Button, Counter, Input, Switch, Textarea} from '@/components/common'
import React from 'react'

export const ProgramsCreate: React.FC = () => (
  <div className="max-w-[1260px] mx-auto w-full py-10">
    <div className="flex justify-between items-center mx-7">
      <h2 className="text-[28px] font-semibold">Creating a program</h2>
      <Button theme="primary">Create</Button>
    </div>
    <div className="w-full h-[1px] bg-[#EBEBEB] mt-7"></div>
    <div className="flex max-[960px]:flex-col">
      <div className="px-7 py-3.5 w-1/2 max-[960px]:w-full">
        <h4 className="font-semibold">Program name</h4>
        <Input placeholder="Program name" className="h-14 mb-5" />
        <h4 className="font-semibold mb-1">Description</h4>
        <Textarea value="" className="w-full" />
        <h4 className="font-semibold mt-4">Completion parameters</h4>
        <p>A condition for accessing the next course of the program</p>
      </div>
      <div className="px-7 py-3.5 w-1/2 max-[960px]:w-full">
        <h4 className="font-semibold">Deadline</h4>
        <p>Time period for a student to complete the program</p>
        <div className="flex items-center gap-3 my-2">
          <Counter />
          <p>days</p>
        </div>
        <Switch label="Block access to the program after deadline" checked={true} onCheckedChange={() => {}} />
      </div>
    </div>
  </div>
)
