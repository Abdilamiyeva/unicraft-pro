import {Search, Tooltip} from '@/components/common'
import {NewsCard} from './components'
import {Link} from 'react-router-dom'

export const NewsPage = () => (
  <div className="max-w-[1260px] mx-auto w-full py-10">
    <div className="flex justify-between items-center w-full max-[960px]:items-start mx-7">
      <div className="flex w-full justify-between items-center max-[960px]:flex-col max-[960px]:items-start mr-7">
        <p className="text-[28px] font-semibold">News</p>
        <Search divClassName="w-[227px] max-[960px]:w-full" />
      </div>
      <div className="">
        <Link to="/news/edit">
          <Tooltip
            title="create news"
            side="bottom"
            className="px-3 -ml-3 mr-12"
            icon={<i className="notranslate icn icn-icn icn-plus text-[28px]"></i>}
          />
        </Link>
      </div>
    </div>
    <div className="m-7">
      <div className="my-4 py-3 text-[22px] border-b-[1px] border-b-[#EBEBEB] font-[300]">February 2024</div>
      <div className="cards grid grid-cols-3 gap-7 max-[1160px]:grid-cols-2 max-[786px]:grid-cols-1 mt-7">
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  </div>
)
