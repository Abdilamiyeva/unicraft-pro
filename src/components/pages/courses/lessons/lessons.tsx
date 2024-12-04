import React, {useState, DragEvent} from 'react'
import {VscBook} from 'react-icons/vsc'
import {TfiWorld} from 'react-icons/tfi'
import {BoardState, Todo} from './types'
import {IoMdApps} from 'react-icons/io'
import {AddLessons} from './components/constants/add-lessons'
import {cn} from '@/utils/lib/utils'
import LessonSidebar from './components/lessons-sidebar/lesson-sidebar'
import {LessonSidebarTask} from './components/lessons-sidebar-task'

export const Lessons: React.FC = () => {
  const [board, setBoard] = useState<BoardState>({
    todos: [
      {id: 1, title: 'Path module', icon: <TfiWorld className="w-7 h-7" />},
      {id: 2, title: 'What is Nodejs', icon: <VscBook className="w-7 h-7" />},
      {id: 3, title: 'Path module1', icon: <TfiWorld className="w-7 h-7" />},
      {id: 4, title: 'What is Nodejs1', icon: <VscBook className="w-7 h-7" />},
    ],
    draggedTask: undefined,
    draggedTaskIndex: undefined,
    dragOverItemIndex: undefined,
  })
  const [open, setOpen] = useState<boolean>(false)

  const [openTaskbar, setOpenTaskbar] = useState<boolean>(false)
  const [lessonName, setLessonName] = useState<string>('')
  const onDrag = (event: DragEvent, todo: Todo) => {
    event.preventDefault()
    setBoard(prev => ({...prev, draggedTask: todo}))
  }

  const onDragOver = (event: DragEvent) => {
    event.preventDefault()
  }

  const onDrop = () => {
    const {draggedTask, todos, dragOverItemIndex, draggedTaskIndex} = board
    if (draggedTask && dragOverItemIndex !== undefined && draggedTaskIndex !== undefined) {
      const copy = [...todos]
      if (draggedTaskIndex !== undefined && dragOverItemIndex !== undefined) {
        copy.splice(draggedTaskIndex, 1)
        copy.splice(dragOverItemIndex, 0, draggedTask)
      }

      setBoard({
        todos: [...copy],
        draggedTask: undefined,
        dragOverItemIndex: undefined,
        draggedTaskIndex: undefined,
      })
      console.warn(copy)
    }
  }

  const addLessons = (lesson: string) => {
    switch (lesson) {
      case 'Task':
        setOpenTaskbar(true)
        break
      case 'Test':
        break
      default:
        setOpen(true)
        break
    }
    setLessonName(lesson)
  }

  const getLessonData = (data: any) => {
    console.warn(data, 'data')
  }
  const getLessonTaskData = (data: any) => {
    console.warn(data)
  }
  const {todos} = board

  return (
    <>
      <div className="flex h-[80vh]">
        <div
          className="w-[635px] border-r border-gray-200"
          onDrop={() => onDrop()}
          onDragOver={event => onDragOver(event)}
        >
          {todos?.map((todo, index) => (
            <div
              key={todo.id}
              draggable
              onDragStart={() => setBoard(prev => ({...prev, draggedTaskIndex: index}))}
              onDragEnter={() => setBoard(prev => ({...prev, dragOverItemIndex: index}))}
              onDrag={event => onDrag(event, todo)}
              className="flex items-center justify-between p-2 hover:bg-blue-100 relative"
            >
              <div className="flex items-center gap-5">
                <div className="w-[54px] h-[54px] rounded-full shadow-icon flex items-center justify-center text-gray-500">
                  {todo.icon}
                  {index > 0 && <span className="h-2 w-[1px] bg-black absolute top-0 left-8.5"></span>}
                  {index < todos?.length - 1 && (
                    <span className="h-2 w-[1px] bg-black absolute bottom-0 left-8.5"></span>
                  )}
                </div>
                <p>{todo.title}</p>
              </div>
              <IoMdApps className="cursor-move text-gray-300" />
            </div>
          ))}
        </div>

        <div>
          <div className="w-full pt-24 px-20 pb-20 h-[80vh] overflow-y-auto overflow-hidden">
            <div className="h-[600px]">
              <h1 className="text-center text-4xl">Adding lesson</h1>
              <p className="text-center text-[#8c8c8c] text-sm my-4">THEORY</p>
              <div className=" flex flex-wrap justify-between">
                {AddLessons?.map(el => (
                  <div
                    className="w-[168px] h-[125px] flex items-center justify-center hover:text-blue-300 cursor-pointer"
                    onClick={() => addLessons(el.title)}
                  >
                    <div>
                      <div className="flex items-center justify-center">
                        <i className={cn('text-5xl', el.iconClassName)}></i>
                      </div>
                      <p className=" text-base text-center">{el.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-[#8c8c8c] text-sm my-4 mt-20">PRACTICE</p>
              <div className=" flex flex-wrap justify-center">
                <div
                  className="w-[168px] h-[125px] flex items-center justify-center hover:text-blue-300 cursor-pointer"
                  onClick={() => console.warn()}
                >
                  <div>
                    <div className="flex items-center justify-center">
                      <i className={'icn icn-test text-5xl'}></i>
                    </div>
                    <p className="text-base text-center">Test</p>
                  </div>
                </div>

                <div
                  className="w-[168px] h-[125px] flex items-center justify-center hover:text-blue-300 cursor-pointer"
                  onClick={() => addLessons('Task')}
                >
                  <div>
                    <div className="flex items-center justify-center">
                      <i className={'icn icn-questiontext text-5xl'}></i>
                    </div>
                    <p className="text-base text-center">Task</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LessonSidebar
        getForm={getLessonData}
        open={open}
        close={() => setOpen(false)}
        side={'right'}
        lessonName={lessonName}
      />
      <LessonSidebarTask
        getFormtask={getLessonTaskData}
        open={openTaskbar}
        close={() => setOpenTaskbar(false)}
        side={'right'}
        lessonName={lessonName}
      />
    </>
  )
}
