export interface Todo {
  id: number
  title: string
  icon: JSX.Element
}

export interface BoardState {
  todos: Todo[]
  draggedTask: Todo | undefined
  draggedTaskIndex: number | undefined
  dragOverItemIndex: number | undefined
}
