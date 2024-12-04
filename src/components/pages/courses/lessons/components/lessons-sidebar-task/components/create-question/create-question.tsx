import {Dropdown, Input, Markdown, Textarea} from '@/components/common'
import {CreateQuestionProps} from './types'
import {ChangeEvent, useRef} from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {GrChapterAdd} from 'react-icons/gr'
import {LiaFileInvoiceSolid} from 'react-icons/lia'
import {RiDeleteBin5Line} from 'react-icons/ri'

export const CreateQuestion = ({
  addQuestion,
  deleteQuestion,
  setTask,
  question,
  HintTrainer,
  id,
  file,
  ball,
  number,
}: CreateQuestionProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement> | string, title: string): void => {
    setTask((prevTask: any) => {
      const updatedQuestions = prevTask?.questions?.map((q: any) => (q?.id === id ? {...q, [title]: e} : q))
      return {...prevTask, questions: updatedQuestions ?? []}
    })
  }

  const onFileChange = (files: FileList | null) => {
    const selectedFiles = files ? Array.from(files) : []
    const visit: {[key: string]: any} = {}
    const allFiles: object[] = []
    for (const el of [...selectedFiles, ...file]) {
      if (!visit[el?.name]) {
        allFiles.push(el)
        visit[el?.name] = true
      }
    }

    setTask((prevTask: any) => {
      const updatedQuestions = prevTask?.questions?.map((q: any) => (q.id === id ? {...q, file: allFiles} : q))
      return {...prevTask, questions: updatedQuestions ?? []}
    })
    if (fileInputRef.current) {
      ;(fileInputRef.current as HTMLInputElement).value = ''
    }
  }

  const deletFile = (fileName: string) => {
    setTask((prevTask: any) => {
      const updatedQuestions = prevTask?.questions?.map((q: any) =>
        q.id === id ? {...q, file: file.filter(el => el.name !== fileName)} : q,
      )
      return {...prevTask, questions: updatedQuestions ?? []}
    })
  }

  return (
    <div className="border border-gray-200 w-full shadow-xl mt-[21px]">
      <div className="mx-[21px] mt-[21px] mb-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <i className="icn icn-questiontext text-3xl"></i>
          <h3 className="text-sm mb-2">QUESTION №{number}</h3>
        </div>
        <Dropdown
          trigger={<i className="icn icn-more_v text-xl cursor-pointer"></i>}
          items={[
            {onClick: () => addQuestion(), label: 'Dublicate', icon: <GrChapterAdd size={18} />},
            {
              onClick: () => deleteQuestion(),
              label: 'Delete',
              icon: <RiDeleteBin6Line size={18} />,
            },
          ]}
        />
      </div>
      <div className="ring-offset-gray-400 ring-offset ring-gray-200 ring-1 w-full border border-gray-300 bg-gray-100 rounded flex items-center gap-4 p-2 h-[41px]">
        <p className="text-xs">Баллы</p> <div className=" bg-gray-300 h-7 w-[0.5px]"></div>{' '}
        <p className="text-xs">Прохождение:</p>
        <Input
          onChange={e => handleChange(e.target.value, 'ball')}
          defaultValue={ball}
          type="number"
          className="text-sm w-[71px] h-[35px] rounded-none flex items-center justify-center text-center my-autor mb-[8px]"
        />
      </div>
      <div className="mx-[21px]">
        <Markdown defaultValues={question} onChange={e => handleChange(`${e}`, 'question')} />
      </div>
      <div className="m-[21px]">
        <input
          ref={fileInputRef}
          type="file"
          accept="*"
          multiple
          onChange={event => onFileChange(event.target.files)}
          className='appearance-none
        block
        w-full
        mb-[15px]
        h-[56px]
        font-medium
        text-gray-700
        hover:border-gray-300
        hover:text-blue-400
        focus:outline-none focus:ring-2 focus:ring-offset-2 border-dashed border border-gray-200"'
        />

        <div>
          {file?.map(el => (
            <div className="flex items-center justify-between border border-white hover:border hover:border-gray-300 p-2 rounded">
              <div className="flex items-center gap-2">
                <LiaFileInvoiceSolid className="mr-1 text-2xl text-gray-300" />
                <p className="text-sm font-bold"> {el.name}</p>{' '}
                <p className="text-[11px] font-semibold text-gray-400">File is uploading</p>
              </div>
              <RiDeleteBin5Line
                className="text-[#787777] cursor-pointer text-2xl mr-1"
                onClick={() => deletFile(el.name)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="m-[21px]">
        <Textarea
          onChange={(e: any) => handleChange(e.target.value, 'HintTrainer')}
          defaultValue={HintTrainer}
          placeholder="Hint to the trainer"
          title="Hint to the trainer"
          className="text-base p-3.5 h-6 w-full text-black"
        />
      </div>
    </div>
  )
}
