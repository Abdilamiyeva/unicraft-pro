import {useState} from 'react'
import {Button, Input, Sidebar, Switch, Tabs} from '@/components/common'
import {LessonProps, Task} from './types'
import {SlArrowRight} from 'react-icons/sl'
import {CreateQuestion} from './components/create-question'

export const LessonSidebarTask = ({open, close, side, lessonName, getFormtask}: LessonProps) => {
  const [task, setTask] = useState<Task>({
    taskName: 'Task',
    questions: [
      {
        question: '',
        HintTrainer: '',
        file: [],
        id: new Date().getMilliseconds().toLocaleString(),
        ball: 1,
        number: 1,
      },
    ],
  })

  const [isChecked, setIsChecked] = useState<boolean>(false)
  const onSubmit = async () => {
    getFormtask(task)
  }

  const addQuestion = () => {
    setTask(prevTask => ({
      ...prevTask,
      questions: [
        ...prevTask.questions,
        {
          question: '',
          HintTrainer: '',
          file: [],
          id: new Date().getMilliseconds().toLocaleString(),
          ball: 1,
          number: prevTask.questions.length + 1,
        },
      ],
    }))
  }
  const deleteQuestion = () => {
    setTask(prevTask => ({
      ...prevTask,
      questions: prevTask.questions.filter((_, index) => index < task?.questions?.length - 1),
    }))
  }

  return (
    <Sidebar
      open={open}
      close={close}
      side={side}
      title={
        <div className="w-full flex items-center justify-center bg-white z-10">
          <div className="flex items-center justify-between w-[1120px] border-dashed border-b border-gray-300 pb-3 px-4">
            <div className="flex gap-2 items-center">
              <p className="text-[11px] font-normal cursor-pointer hover:text-blue-500" onClick={() => close()}>
                Создание урока
              </p>
              <SlArrowRight className="text-gray-400 font-light text-[9px]" />
              <p className="font-normal text-[11px]">{lessonName?.toUpperCase()}</p>
            </div>

            <div className="flex items-center"></div>
          </div>
        </div>
      }
      className={'min-w-[92%]'}
      titleHeaderClassName="bg-white"
    >
      <div className="w-full flex justify-center">
        <div className="w-[1120px] mt-8">
          <div className=" mb-2 pb-80  min-h-[100vh]">
            <Tabs
              tabs={[
                {
                  label: 'DESCRIPTION',
                  id: '1',
                  children: (
                    <>
                      <div className="mt-10 ">
                        <Input
                          defaultValue={task?.taskName}
                          labelClassName="text-sm"
                          label={'Name'}
                          className="p-6 mt-2"
                        />
                        <div className="pt-20">
                          <h2 className="text-[19px] font-light text-gray-700  border-b border-gray-300 ">
                            PARAMETERS
                          </h2>
                          <div className=" gap-3 mt-10">
                            <Switch
                              checked={isChecked}
                              label="Stop-lesson"
                              text="The student will be able to proceed to the next lesson only after this answer is accepted by the trainer.
"
                              onCheckedChange={prev => setIsChecked(!prev)}
                            />
                            <br />
                            <Switch
                              checked={isChecked}
                              label="Block theory"
                              text="When performing, access to the rest lessons will be blocked

"
                              onCheckedChange={prev => setIsChecked(!prev)}
                            />
                            <br />
                            <Switch
                              checked={isChecked}
                              label="Скрывать баллы за ответ
                          "
                              onCheckedChange={prev => setIsChecked(!prev)}
                              text="Студенты не видят полученные за ответ баллы по каждому вопросу

"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pb-4">
                        <div className="border-l-2 border-yellow-300 h-36 p-7">
                          <h2 className="text-[19px] font-bold">Attention</h2>
                          <p className=" text-sm mt-6">Task definition not specified</p>
                        </div>
                        <div className="flex items-center justify-between  border-t border-gray-300 p-3 mb-20 mt-20">
                          <Button
                            disabled={!task?.questions?.every(el => el.question !== '')}
                            theme="primary"
                            className=" text-white text-lg py-3 px-8 font-semibold inline-block"
                            onClick={() => onSubmit()}
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
                      </div>
                    </>
                  ),
                },
                {
                  label: (
                    <div className="flex items-center gap-1">
                      QUESTIONS
                      <span className=" bg-gray-200 rounded px-[5px] py-[0px] h-[15px] flex items-center justify-center text-[9px] text-center">
                        {task?.questions?.length}
                      </span>
                    </div>
                  ),
                  id: '2',
                  children: (
                    <>
                      <div className="p-7">
                        {task?.questions?.map(el => (
                          <CreateQuestion
                            key={el.id}
                            {...el}
                            addQuestion={addQuestion}
                            deleteQuestion={deleteQuestion}
                            setTask={setTask}
                          />
                        ))}
                        <Button className="my-8" onClick={() => addQuestion()}>
                          ADD QUESTION
                        </Button>
                      </div>
                      <div className="pb-4">
                        <div className="border-l-2 border-yellow-300 h-36 p-7">
                          <h2 className="text-[19px] font-bold">Attention</h2>
                          <p className=" text-sm mt-6">Task definition not specified</p>
                        </div>
                        <div className="flex items-center justify-between  border-t border-gray-300 p-3 mb-20 mt-20">
                          <Button
                            disabled={!task?.questions?.every(el => el.question !== '')}
                            theme="primary"
                            className=" text-white text-lg py-3 px-8 font-semibold inline-block"
                            onClick={() => onSubmit()}
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
                      </div>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Sidebar>
  )
}
