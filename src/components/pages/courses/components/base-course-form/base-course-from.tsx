import {Button, Counter, Input, Markdown, Select, Textarea} from '@/components/common'
import {useState} from 'react'
import {ImageUploader} from '@/components/common/upload-image'
import {Switch} from '@/components/common/switch'
import {BaseCourseFormProps} from './types'
import {mockOptions} from '../../mock/sections/sections'

export const BaseCourseForm = ({btnName, deleteBtnName}: BaseCourseFormProps) => {
  const [value, setValue] = useState<string>('')
  const [isAddDes, setIsAddDes] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <div>
      <Input
        className="w-full py-6"
        variant="yellow"
        placeholder="Course name"
        label="Course name"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <p className="text-[#8c8c8c] italic text-sm font-normal mt-2">E.g.: Ways to increase customer loyalty</p>
      <Textarea className="w-full" value="Course description" placeholder="Course description" />
      {!isAddDes && (
        <Button size="sm" onClick={() => setIsAddDes(true)} className="mt-4 bg-[#FCFCFC]" variant="outline">
          ADD EXTENDED DESCRIPTION
        </Button>
      )}
      {isAddDes && <Markdown label="Extended description" />}
      <div className="mt-16">
        <div className="flex flex-wrap gap-8 justify-between">
          <div>
            <Select className="w-[600px]" title={'Section'} option={mockOptions} />
            <div className="mt-5">
              <Input className="w-[600px]" label="Author" placeholder="Author" />
              <p className="text-[#8c8c8c] italic text-sm font-normal mt-2">E.g.: John Doe</p>
            </div>
          </div>
          <div className="w-[520px] 4xl:w-full">
            <ImageUploader height={300} variant={'top'} />
          </div>
        </div>
      </div>

      <div className="mt-14 mb-8 justify-between flex">
        <div>
          <h3 className="font-bold text-base leading-20 mb-1">Output priority</h3>
          <p className="text-sm font-normal mb-3">The smaller the value, the earlier the course is displayed</p>
          <div>
            <Counter />
            <div className="mt-7">
              <Switch
                label="Certificate"
                checked={isChecked}
                text="Give students a certificate after completing the course"
                onCheckedChange={prev => setIsChecked(!prev)}
              />
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <h3 className="font-bold text-base leading-20 mb-1">Deadline</h3>
          <p className="text-sm font-normal mb-3">The time period for a student to complete the course</p>
          <div>
            <div className="flex gap-3 items-center">
              <Counter />
              <span>days</span>
            </div>
            <div className="mt-7">
              <Switch
                label="Block access to the course after deadline"
                checked={isChecked}
                onCheckedChange={() => setIsChecked(!isChecked)}
              />
            </div>
          </div>
        </div>
        <div className="w-10"></div>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        {btnName && (
          <Button className="my-4" theme="primary">
            {btnName}
          </Button>
        )}
        {deleteBtnName && <Button theme="danger">{deleteBtnName}</Button>}
      </div>
    </div>
  )
}
