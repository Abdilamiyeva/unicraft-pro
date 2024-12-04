import {Button, Input} from '@/components/common'
import {testArr, theoryArr} from '../../../mock/sections/sections'

export const Score = () => (
  <div>
    <div className="mx-[100px]">
      <p>Задайте баллы, начисляемые по умолчанию за выполнение уроков каждого типа</p>
      <div className="mt-10 flex gap-10 justify-between">
        <div className="flex-1">
          <h2 className="text-[#333] text-xl font-light">THEORY</h2>
          <hr />
          <div className="mt-6">
            {theoryArr.map((item, idx) => (
              <div key={idx} className="flex justify-between px-5 transition-all hover:bg-[#f8fafc] items-center">
                <div>
                  <span className="text-sm font-normal">{item.name}</span>
                </div>
                <div className="mb-2">
                  <Input placeholder="?" defaultValue={item.value} className="rounded-none w-[65px] text-center" />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-[#333] text-xl font-light">TASK</h2>
            <hr />
            <div className="my-6 flex justify-between px-5 transition-all hover:bg-[#f8fafc] items-center">
              <p className="text-sm font-normal">Правильный ответ</p>
              <div>
                <Input defaultValue="1" placeholder="?" className="rounded-none w-[65px] text-center" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-[#333] text-xl font-light">TEST</h2>
          <hr />
          <div className="mt-6">
            {testArr.map((item, idx) => (
              <div key={idx} className="flex justify-between  px-5 transition-all hover:bg-[#f8fafc] items-center ">
                <div className="flex justify-between gap-16 items-center">
                  <p className="text-sm font-normal">{item.name}</p>
                  <p className="text-sm font-normal">{item.check}</p>
                </div>
                <div className="mb-2">
                  <Input defaultValue={item.value} placeholder="?" className="rounded-none w-[65px] text-center" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="mt-4 flex items-center">
      <Button size="sm" disabled theme="primary">
        save
      </Button>
      <Button size="sm" disabled>
        Cancel
      </Button>
    </div>
  </div>
)
