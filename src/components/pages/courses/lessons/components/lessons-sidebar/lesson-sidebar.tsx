import {useEffect, useRef, useState} from 'react'
import {Button, Field, Sidebar} from '@/components/common'
import {FormData, LessonProps} from './types'
import {useForm} from 'react-hook-form'
import {Form} from '@/components/ui/form'
import {SlArrowRight} from 'react-icons/sl'
import {PiChatTextThin} from 'react-icons/pi'
import {PiInfoLight} from 'react-icons/pi'
import {LiaFileInvoiceSolid} from 'react-icons/lia'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {PiWarning} from 'react-icons/pi'

const LessonSidebar = ({open, close, side, lessonName, getForm}: LessonProps) => {
  const [disabled, setDisabled] = useState<boolean>(false)

  const [isLoadFile, setIsLoadFile] = useState<boolean>(true)

  const [file, setFile] = useState<FileList | undefined>(undefined)

  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const form = useForm<FormData>({
    defaultValues: {
      description: '',
      name: lessonName,
      ball: 1,
      link: '',
    },
  })

  const watchChange = form.watch('link')

  const onFileChange = (fileArr: FileList) => {
    if (!fileArr) {
      return
    }
    const selectedFiles = files ? Array.from(fileArr) : []
    const visit: {[key: string]: any} = {}
    const allFiles: object[] = []
    for (const el of [...selectedFiles]) {
      if (!visit[el?.name]) {
        allFiles.push(el)
        visit[el?.name] = true
      }
    }
    setFiles((prev: any) => {
      const prevFiles = prev || []
      return [...prevFiles, ...allFiles]
    })
    if (fileInputRef.current) {
      ;(fileInputRef.current as HTMLInputElement).value = ''
    }
  }

  const deletFile = (fileName: string) => {
    setFiles((prev: any) => {
      const prevFiles = prev || []
      return [...prevFiles.filter((el: any) => el.name !== fileName)]
    })
  }

  const onSubmit = async (formData: any) => {
    switch (lessonName) {
      case 'PDF':
      case 'Oranges':
      case 'Audio':
      case 'Video':
      case 'SCORM':
        delete formData.link
        getForm({...formData, file})
        break
      case 'Text':
        if (isLoadFile) {
          delete formData.link
          getForm({...formData, files})
        } else {
          getForm({...formData})
        }
        break
      case 'Google Docs':
      case 'Web page':
      case 'Zoom':
      case 'Tilda':
        getForm({...formData})
        break
      default:
        break
    }
    close()
  }

  useEffect(() => {
    setFile(undefined)
    setFiles([])
    form.reset({
      description: '',
      name: lessonName,
      ball: 1,
      link: '',
    })
  }, [lessonName, form])

  useEffect(() => {
    const nameValue = form.watch('link')
    switch (lessonName) {
      case 'PDF':
      case 'Oranges':
      case 'Audio':
      case 'Video':
      case 'SCORM':
        setDisabled(file ? true : false)
        break
      case 'Text':
        if (isLoadFile) {
          setDisabled(files.length ? true : false)
        } else {
          setDisabled(Boolean(nameValue?.length))
        }
        break
      case 'Web page':
      case 'Zoom':
      case 'Tilda':
      case 'Google Docs':
        setDisabled(Boolean(nameValue?.length))
        break
      default:
        break
    }
  }, [isLoadFile, watchChange, watchChange, file, lessonName, form, files])

  return (
    <Sidebar
      open={open}
      close={close}
      side={side}
      title={
        <div className="w-full flex items-center justify-center bg-white z-10">
          <div className="flex items-center justify-between w-[1000px] border-dashed border-b border-gray-300 pb-3 px-4">
            <div className="flex gap-2 items-center">
              <p className="text-[11px] font-normal cursor-pointer hover:text-blue-500" onClick={() => close()}>
                СОЗДАНИЕ УРОКА
              </p>
              <SlArrowRight className="text-gray-400 font-light text-[9px]" />
              <p className="font-normal text-[11px]">{lessonName?.toUpperCase()}</p>
            </div>

            <div className="flex items-center"></div>
          </div>
        </div>
      }
      className={'min-w-[92%] '}
      titleHeaderClassName=" bg-white "
    >
      <div className="w-full flex justify-center">
        <div className="w-[1000px] mt-8">
          <Form {...form}>
            <form>
              <Field
                type="input"
                name="name"
                control={form.control}
                componentProps={{
                  labelClassName: 'text-sm',
                  label: 'Name',
                  className: 'p-6 mt-2 text-lg',
                }}
              />

              {lessonName === 'PDF' ||
              lessonName === 'Google Docs' ||
              lessonName === 'Web page' ||
              lessonName === 'Zoom' ||
              lessonName === 'Tilda' ||
              lessonName === 'SCORM' ? (
                <>
                  <Field
                    type="textarea"
                    name="description"
                    control={form.control}
                    componentProps={{
                      onfocus: true,
                      title: 'Description',
                      placeholder: 'Description',
                      className: 'text-base p-3.5 h-6 w-full text-black',
                    }}
                  />

                  <div className="h-12 ring-offset-gray-400 ring-offset ring-gray-200 ring-1 w-full border border-gray-300 bg-gray-50 rounded mt-4 mb-10 flex items-center gap-4 p-2">
                    <b className="text-sm fon">Баллы</b> <div className=" bg-gray-300 h-7 w-[0.5px]"></div>{' '}
                    <p className="text-sm">Прохождение:</p>
                    <Field
                      type="input"
                      name="ball"
                      control={form.control}
                      componentProps={{
                        type: 'number',
                        className:
                          'w-10 text-sm w-[60px] h-[40px] rounded-none flex items-center justify-center text-center',
                      }}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}

              {lessonName === 'Text' && (
                <>
                  <div className="h-12 ring-offset-gray-400 ring-offset ring-gray-200 ring-1 w-full border border-gray-300 bg-gray-50 rounded mt-4 mb-10 flex items-center gap-4 p-2">
                    <b className="text-sm fon">Баллы</b> <div className=" bg-gray-300 h-7 w-[0.5px]"></div>{' '}
                    <p className="text-sm">Прохождение:</p>
                    <Field
                      type="input"
                      name="ball"
                      control={form.control}
                      componentProps={{
                        type: 'number',
                        className:
                          'w-10 text-sm w-[60px] h-[40px] rounded-none flex items-center justify-center text-center',
                      }}
                    />
                  </div>
                  <Field
                    type="markdown"
                    name="description"
                    control={form.control}
                    componentProps={{
                      label: 'Description',
                    }}
                  />
                  <br />
                  <br />
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="*"
                    multiple
                    onChange={event => onFileChange(event.target.files as FileList)}
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
                    {files?.map((el: any) => (
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
                </>
              )}
              {lessonName === 'Audio' && (
                <>
                  <div className="h-12 ring-offset-gray-400 ring-offset ring-gray-200 ring-1 w-full border border-gray-300 bg-gray-50 rounded mt-4 mb-10 flex items-center gap-4 p-2">
                    <b className="text-sm fon">Баллы</b> <div className=" bg-gray-300 h-7 w-[0.5px]"></div>{' '}
                    <p className="text-sm">Прохождение:</p>
                    <Field
                      type="input"
                      name="ball"
                      control={form.control}
                      componentProps={{
                        type: 'number',
                        className:
                          'w-10 text-sm w-[60px] h-[40px] rounded-none flex items-center justify-center text-center',
                      }}
                    />
                  </div>
                  <div className="py-10">
                    <h2 className="font-light text-[19px] text-gray-500  border-b border-gray-300 mb-4">SOURCE</h2>

                    <div className="border-l-2 border-x-stone-600 flex items-center justify-between p-6">
                      <div className="text-ms">
                        To change the format or size of the file
                        <a href="http://online-audio-converter.com/ru/" target="_blank">
                          <b> use the online service</b>
                        </a>
                      </div>
                      <PiChatTextThin className="text-5xl text-gray-300" />
                    </div>

                    <p className="text-ms">
                      Choose file. Available format: <b>mp3.</b>. Max size: <b>200 MB</b>.
                    </p>
                  </div>
                  <input
                    name="file"
                    type="file"
                    accept=".mp3"
                    onChange={e => {
                      const fileList = e.target.files
                      if (fileList !== null) {
                        setFile(fileList)
                      }
                    }}
                    className={` appearance-none
                  block
                  w-full
                  py-14
                   mb-8
                  rounded-md
                  font-medium
                  text-gray-700
                  hover:border-gray-300
                  hover:text-blue-400
                  focus:outline-none focus:ring-2 focus:ring-offset-2 border-dashed border border-gray-200`}
                  />
                  <div className="py-4">
                    <h2 className="font-light text-[19px] text-gray-500  border-b border-gray-300 mb-4">DESCRIPTION</h2>
                  </div>
                  <Field
                    type="markdown"
                    name="description"
                    control={form.control}
                    componentProps={{
                      className: 'mb-10',
                    }}
                  />
                  <br />
                </>
              )}
              {lessonName === 'Video' && (
                <>
                  <div className="py-4">
                    <h2 className="text-lg font-light text-gray-400  border-b border-gray-300 mb-4">SOURCE</h2>
                    <p className="text-sm mb-6">Choose how to add video</p>
                    <div className="flex items-center gap-2">
                      <div className=" flex items-center gap-2" onClick={() => setIsLoadFile(true)}>
                        {isLoadFile ? (
                          <div className="bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center">
                            <div className="bg-white rounded-full h-2.5 w-2.5"></div>
                          </div>
                        ) : (
                          <div className="bg-gray-200 rounded-full h-5 w-5 flex items-center justify-center hover:border hover:border-blue-400"></div>
                        )}

                        <p className="text-sm">Load file</p>
                      </div>
                      <div className="flex items-center gap-2" onClick={() => setIsLoadFile(false)}>
                        {!isLoadFile ? (
                          <div className="bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center">
                            <div className="bg-white rounded-full h-2.5 w-2.5"></div>
                          </div>
                        ) : (
                          <div className="bg-gray-200 rounded-full h-5 w-5 flex items-center justify-center hover:border hover:border-blue-400"></div>
                        )}
                        <p className="text-sm">Put link</p>
                      </div>
                    </div>
                    <div className="border-l-2 border-x-stone-600 flex items-center justify-between p-6 my-3">
                      {isLoadFile ? (
                        <div className="text-sm">
                          For maximum compatibility with modern browsers, we recommend using mp4 files. If your video is
                          too large or there is no image after loading, convert it
                          <a href="http://online-audio-converter.com/ru/" target="_blank">
                            <b> in online service</b>
                          </a>
                        </div>
                      ) : (
                        <div className="text-sm">
                          Video hosting is supported as a source
                          <a href="http://youtube.ru" target="_blank">
                            <b className="underline"> YouTube,</b>
                          </a>
                          <a href="http://vimeo.com" target="_blank">
                            <b className="underline"> Vimeo,</b>
                          </a>
                          <a href="http://kinescope.io" target="_blank">
                            <b className="underline"> Kinescope,</b>
                          </a>
                          <a href="http://rutube.ru" target="_blank">
                            <b className="underline"> RuTube</b>
                          </a>
                        </div>
                      )}
                      <PiChatTextThin className=" text-5xl text-gray-300" />
                    </div>
                    {isLoadFile ? (
                      <p className="text-sm">
                        Choose file. Available format:<b>mp4 (H.264), webm.</b>. Max size: <b>500 MB</b>.
                      </p>
                    ) : (
                      <p className="text-sm">Put the link from a hosting: </p>
                    )}
                  </div>
                  {isLoadFile ? (
                    <input
                      name="file"
                      type="file"
                      accept=".mp4,.webm"
                      onChange={e => {
                        const fileList = e.target.files
                        if (fileList !== null) {
                          setFile(fileList)
                        }
                      }}
                      className={` appearance-none
                    block
                    w-full
                    py-14
                    h-56
                     mb-8
                    rounded-md
                    font-medium
                    text-gray-700
                    hover:border-gray-300
                    hover:text-blue-400
                    focus:outline-none focus:ring-2 focus:ring-offset-2 border-dashed border border-gray-200`}
                    />
                  ) : (
                    <Field
                      type="input"
                      name="link"
                      control={form.control}
                      componentProps={{
                        placeholder: 'Link to video',
                      }}
                    />
                  )}
                  <br />
                  <Field
                    type="markdown"
                    name="description"
                    control={form.control}
                    componentProps={{
                      label: 'Description',
                      labelClassName: ' text-lg font-light',
                    }}
                  />
                  <br />
                  <div className="h-10 ring-offset-gray-400 ring-offset ring-gray-200 ring-1 w-full border border-gray-300 bg-gray-100 rounded flex items-center gap-4 p-2 my-10">
                    <p className="text-xs">Баллы</p> <div className=" bg-gray-300 h-7 w-[0.5px]"></div>{' '}
                    <p className="text-xs">Прохождение:</p>
                    <Field
                      type="input"
                      name="ball"
                      control={form.control}
                      componentProps={{
                        type: 'number',
                        className:
                          'w-10 text-sm w-[60px] h-[32px] rounded-none flex items-center justify-center text-center',
                      }}
                    />
                  </div>
                </>
              )}
              {(lessonName === 'Google Docs' ||
                lessonName === 'Web page' ||
                lessonName === 'Zoom' ||
                lessonName === 'Tilda' ||
                lessonName === 'SCORM') && (
                <h2 className="font-light text-lg text-gray-600  border-b border-gray-300 mb-8">SOURCE</h2>
              )}
              {(lessonName === 'Web page' || lessonName === 'Zoom' || lessonName === 'Tilda') && (
                <div>
                  <Field
                    type="input"
                    name="link"
                    control={form.control}
                    componentProps={{
                      placeholder: 'Link to video',
                      className: 'h-14 text-base mb-8',
                    }}
                  />
                </div>
              )}

              {lessonName === 'SCORM' && (
                <>
                  <p className="text-sm">
                    Choose file. Available format: <b>zip</b>
                  </p>

                  <input
                    name="file"
                    type="file"
                    accept=".zip"
                    onChange={e => {
                      const fileList = e.target.files
                      if (fileList !== null) {
                        setFile(fileList)
                      }
                    }}
                    className={`appearance-none
                      block
                      w-full
                      py-14
                      h-56
                       mb-8
                      rounded-md
                      font-medium
                      text-gray-700
                      hover:border-gray-300
                      hover:text-blue-400
                      focus:outline-none focus:ring-2 focus:ring-offset-2 border-dashed border border-gray-200`}
                  />
                </>
              )}
              {lessonName === 'PDF' && (
                <>
                  <div className="py-10">
                    <h2 className="font-light text-[19px] text-gray-500  border-b border-gray-300 mb-4">SOURCE</h2>
                    <div className="border-l-2 border-x-stone-600 flex items-center justify-between p-6">
                      <div className="text-ms">
                        To edit PDF files, use
                        <a href="https://www.ilovepdf.com/" target="_blank">
                          <b>an online service</b>
                        </a>
                      </div>
                      <PiChatTextThin className=" text-5xl text-gray-300" />
                    </div>
                    <p className=" text-ms">
                      Choose file. Available format: <b>pdf</b>. Max size: <b>200 MB</b>.
                    </p>
                  </div>

                  <input
                    name="file"
                    type="file"
                    accept=".pdf"
                    onChange={e => {
                      const fileList = e.target.files
                      if (fileList !== null) {
                        setFile(fileList)
                      }
                    }}
                    className={` appearance-none
                    block
                    w-full
                    py-14
                     mb-8
                    rounded-md
                    font-medium
                    text-gray-700
                    hover:border-gray-300
                    hover:text-blue-400
                    focus:outline-none focus:ring-2 focus:ring-offset-2 border-dashed border border-gray-200`}
                  />
                </>
              )}
              {lessonName === 'Web page' && (
                <div className="border-l-2 border-x-stone-600 flex items-center justify-between p-6 mb-8">
                  <p className="text-ms">
                    You can specify a link to any web page To publish files from Google, go to the menu: File {'->'}
                    Publish to the web {'->'} Embed {'->'} Publish. Copy the code in the field above.
                  </p>
                  <PiInfoLight className=" text-8xl text-gray-300" />
                </div>
              )}
              {lessonName === 'Google Docs' && (
                <div>
                  <p>
                    Only Google Documents import is supported. To import a file,
                    <a
                      href="https://support.google.com/drive/answer/2494822?hl=ru&co=GENIE.Platform%3DDesktop"
                      target="_blank"
                    >
                      <b className="underline "> share the link.</b>
                    </a>
                    Then put the link in the box below:
                  </p>
                  <div className="flex items-center gap-0 mb-8">
                    <Button className=" h-14 bg-gray-100">
                      <i className="icn icn-refresh text-4xl text-gray-400"></i>
                    </Button>
                    <Field
                      type="input"
                      name="link"
                      control={form.control}
                      componentProps={{
                        placeholder: 'Link to video',
                        className: 'h-14 text-base',
                      }}
                    />
                  </div>
                </div>
              )}
              {lessonName === 'Zoom' && watchChange && (
                <div className="border-l-2 border-x-yellow-600 flex items-center justify-between p-6 mb-8">
                  <div>
                    <h2 className="text-[19px] font-bold">Attention</h2> <br />
                    <p className="text-ms">No links to the resource</p>
                  </div>
                  <PiWarning className=" text-5xl text-gray-300" />
                </div>
              )}
              {lessonName === 'Tilda' && (
                <>
                  <div className="border-l-2 border-x-stone-600 flex items-center justify-between p-6 mb-8">
                    <p className="text-ms">You can specify a link to any web page </p>
                    <PiInfoLight className=" text-5xl text-gray-300" />
                  </div>
                  {!watchChange && (
                    <div className="border-l-2 border-x-yellow-600 flex items-center justify-between p-6 mb-8">
                      <div>
                        <h2 className="text-[19px] font-bold">Attention</h2> <br />
                        <p className="text-ms">No links to the resource</p>
                      </div>
                      <PiWarning className=" text-5xl text-gray-300" />
                    </div>
                  )}
                </>
              )}
              <div className="flex items-center justify-between  border-t border-gray-300 p-3 mb-20">
                <Button
                  disabled={!disabled}
                  theme="primary"
                  className=" text-white text-lg py-3 px-8 font-semibold inline-block"
                  onClick={() => form.handleSubmit(onSubmit)()}
                >
                  CREATE
                </Button>
                <Button
                  theme="default"
                  className="text-black text-lg py-3 px-8 font-semibold inline-block"
                  onClick={() => close()}
                >
                  CANCEL
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Sidebar>
  )
}

export default LessonSidebar
