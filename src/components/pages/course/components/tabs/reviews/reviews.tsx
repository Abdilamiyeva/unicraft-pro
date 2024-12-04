import {Image} from '@/components/common'
import {REVIEWS} from '../../../mock'
import {useTranslation} from 'react-i18next'

export const Reviews = () => {
  const {t} = useTranslation()

  return (
    <div>
      <div className="max-[1225px] mx-auto m-8">
        {REVIEWS.length > 0 ? (
          REVIEWS.map(({isOnline, date, description, firstName, id, stars, tags}) => (
            <div
              className="p-4 m-1 border-l-[1px] border-transparent hover:border-dashed hover:border-gray-400"
              key={id}
            >
              <div className="py-[3.5px] px-3">
                <div className="flex items-center justify-start gap-4">
                  <div className="w-[42px] h-[42px] relative">
                    <Image
                      src="/images/profile-user-img.svg"
                      alt="User"
                      className="bg-[#8c8c8c] w-[42px] h-[42px] rounded-full pt-2"
                    />
                    <span
                      className={`w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full ${isOnline ? 'bg-[#7cb83d]' : 'bg-[#333333]'}`}
                    />
                  </div>
                  <div className="text-[14px]">
                    <p className="font-semibold">{firstName}</p>
                    <p className="text-[13.6px]">{new Date(date).toLocaleDateString('en-US')}</p>
                  </div>
                </div>
                <div className="flex my-1">
                  {Array(5)
                    .fill(undefined)
                    .map((_, index) => (
                      <span key={index} className="text-yellow-500">
                        {index < stars ? (
                          <i className="icn star text-[20px]" />
                        ) : (
                          <i className="icn star-outline text-[20px]" />
                        )}
                      </span>
                    ))}
                </div>
                <div className="flex gap-px items-center my-3 flex-wrap">
                  {tags.map((tag: string) => (
                    <div
                      className="border border-gray-300 px-3 py-[6px] rounded-[3px] text-[12px] font-bold min-w-max"
                      key={tag}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="text-[14px]">{description}</p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <i className="icn icn-comment text-[111px] text-center" />
            <h2 className="font-medium text-[32px] text-center">{t(`pages.course.no_reviews`)}</h2>
            <p className="font-normal text-base text-center">{t(`pages.course.no_reviews_description`)}</p>
          </div>
        )}
      </div>
    </div>
  )
}
