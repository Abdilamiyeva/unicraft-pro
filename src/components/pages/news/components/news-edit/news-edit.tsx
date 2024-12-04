import {Button, ImageUploader, Input, Markdown, Textarea} from '@/components/common'

export const NewsEdit = () => (
  <div className="max-w-[1260px] mx-auto w-full py-7">
    <div className="mx-7">
      <h2>NEWS</h2>
      <h3 className="font-bold text-[28px]">Создание новости</h3>
      <div className="mt-10">
        <Input placeholder="Name" className="text-[18px] placeholder:text-[#999] h-[55px] hover:border-[#ccc]" />
        <Textarea placeholder="Краткое описание (аннотация)" className="w-full my-3" />
        <Markdown />

        <ImageUploader variant={'top'} className="mt-4" />
      </div>
      <hr className="mt-10" />
      <div className="flex mt-4 ml-6">
        <Button theme="primary">SAVE</Button>
        <Button>CANCEL</Button>
      </div>
    </div>
  </div>
)
