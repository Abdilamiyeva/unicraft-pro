import {Tooltip} from '@/components/common'
import {Link} from 'react-router-dom'

export const NewsSingle = () => (
  <div className="w-full">
    <div className="bg-blue-300">
      <div className="max-w-[1260px] mx-auto w-full pt-[57px] flex justify-between items-start pb-4 px-7">
        <div className="">
          <h3 className="text-white">NEWS</h3>
          <h2 className="text-white text-[28px] font-semibold">Nimadir</h2>
          <ul className="flex items-center gap-7">
            <li className="flex items-center gap-1">
              <i className="icn icn-calendar text-white text-[20px]"></i>
              <span className="text-white">Опубликовано: 15.02.2024</span>
            </li>
            <li className="flex items-center gap-1">
              <i className="icn icn-view text-white text-[20px] pt-1" />
              <span className="text-white">Просмотров: 1</span>
            </li>
          </ul>
        </div>
        <Link to="edit">
          <Tooltip
            title="Editing news"
            icon={<i className="icn icn-edit text-[28px]"></i>}
            side="top"
            className="p-3 rounded"
          />
        </Link>
      </div>
      <div></div>
    </div>
    <div className="max-w-[1260px] mx-auto w-full pt-[57px]">
      <p className="px-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facilis atque, ipsum laboriosam soluta saepe
        ullam quaerat quibusdam dolorem. Officiis numquam quas iusto accusantium veniam repellendus molestias sed nobis
        suscipit.
      </p>
    </div>
  </div>
)
