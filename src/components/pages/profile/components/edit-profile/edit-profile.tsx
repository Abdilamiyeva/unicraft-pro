import {Button, Input, Select, Switch, Textarea, Tooltip} from '@/components/common'
import {ImageUploader} from '@/components/common/upload-image'
import {TfiInfoAlt} from 'react-icons/tfi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export const EditProfile = () => (
  <div className="p-[14px]">
    <div className="py-[7px] px-[14px] ">
      <div className="flex justify-between">
        <h1 className="text-[29px] text-black font-bold">Profile editing</h1>
        <div className="flex">
          <Link to="/profile">
            <Button children="back" />
          </Link>
          <Button children="save" theme="primary" />
        </div>
      </div>
      <div className="flex gap-16 w-full">
        <div className="mt-10">
          <h2 className="mb-[32px] w-full border-[#ebebeb] border-b-2 text-[#333] text-[21px] font-light uppercase">
            Photo
          </h2>
          <ImageUploader height={300} className="w-[400px]" variant={'top'} />
        </div>
        <div className="mt-10 w-full">
          <h1 className="mb-[32px] w-full border-[#ebebeb] border-b-2 text-[#333] text-[21px] font-light uppercase">
            GENERAL INFO
          </h1>
          <div className="w-[700px] ">
            <Input placeholder="Full name" defaultValue="Leo" label="Full name" className="my-3" />
            <Input
              className="mb-2"
              type="email"
              placeholder="Email"
              defaultValue="mr.alijonov.azizbek@gmail.com"
              label="Email"
            />
            <Input
              placeholder="Login"
              label="Login"
              labelIcon={
                <div>
                  <Tooltip
                    icon={
                      <AiOutlineQuestionCircle className="text-gray-600 cursor-pointer transition-all hover:text-black  -ml-2 text-base" />
                    }
                    title={'3 to 30 characters'}
                    side={'top'}
                    className="border-none h-1 bg-white hover:bg-white hover:shadow-none"
                  />
                </div>
              }
            />
            <Select
              option={[
                {value: 'By default (ru)', label: 'By default (ru)'},
                {value: 'Russian (ru)', label: 'Russian (ru)'},
                {value: 'English (en)', label: 'English (en)'},
                {value: 'Chinese (zh)', label: 'Chinese (zh)'},
                {value: 'Uzbek (uz)', label: 'Uzbek (uz)'},
                {value: 'Ukrainian (uk)', label: 'Ukrainian (uk)'},
                {value: 'German (de)', label: 'German (de)'},
                {value: 'Spanish (es)', label: 'Spanish (es)'},
                {value: 'Portuguese (pt)', label: 'Portuguese (pt)'},
                {value: 'Kazakh (Latin) (kk)', label: 'Kazakh (Latin) (kk)'},
                {
                  value: 'Kazakh (Cyrillic) (kk-cyrl)',
                  label: 'Kazakh (Cyrillic) (kk-cyrl)',
                },
              ]}
              title={'Interface language'}
              className={'my-3'}
            />
            <Select
              option={[
                {value: 'Administrator', label: 'Administrator'},
                {value: 'Manager', label: 'Manager'},
                {value: 'Trainer', label: 'Trainer'},
                {value: 'Student', label: 'Student'},
              ]}
              title={'Account type'}
              className={'my-3'}
            />
          </div>
          <div
            style={{
              backgroundImage: 'linear-gradient(to right, (#8c8c8c), rgba(124, 184, 61, 0) 50%)',
            }}
            className="flex gap-10 justify-between items-center text-sm border-l-2 pl-[30px] mt-6 shadow-[-15px_0px_20px_-20px_rgb(124,184,61)] border-[#8c8c8c] h-[200px] p-7"
          >
            <div className="w-full">
              <p className="mb-1">
                <b className="font-bold">Administrator</b> - management of users, groups, courses, programs, global
                statistics + opportunities for trainer and student
              </p>
              <p className="mb-1">
                <b className="font-bold">Manager</b> - management of assignment to courses and programs, users,
                statistics of the group + the opportunities of the trainer and student
              </p>
              <p className="mb-1">
                <b className="font-bold">Trainer</b> - checking assignments + student opportunities
              </p>
              <p className="mb-1">
                <b className="font-bold">Student</b> - learning on courses and programs
              </p>
            </div>
            <div className="-mt-32">
              <TfiInfoAlt className="text-gray-300 w-12 h-12" />
            </div>
          </div>
          <div className="mt-11">
            <Switch
              label="Deny edit profile"
              checked={false}
              text="Editing is available to administrators only"
              onCheckedChange={() => {}}
            />
          </div>
          <h1 className="mb-[32px] mt-12 w-full border-[#ebebeb] border-b-2 text-[#333] text-[21px] font-light uppercase">
            Password
          </h1>
          <p className="text-sm">If necessary, set a new password for the user</p>
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <h1 className="mb-[32px] mt-12 w-full border-[#ebebeb] border-b-2 text-[#333] text-[21px] font-light uppercase">
            Additional Info
          </h1>
          <Input label="Company" placeholder="Company name" className="my-3" />
          <Input label="Department" placeholder="Department" className="my-3" />
          <Input label="Position" placeholder="Position" className="my-3" />
          <Textarea value="Comment" placeholder="Add a comment" />
        </div>
      </div>
    </div>
  </div>
)
