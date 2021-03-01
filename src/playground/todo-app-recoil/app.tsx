import { atom, RecoilRoot, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import React, { ChangeEvent, useState } from "react"

interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: []
})

const TodoList = () => {
  const todoListFiltered = useRecoilValue(filteredTodoListSelector)

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      <br/>
      {
        todoListFiltered.map((todo: Todo) => (
          <>
            <TodoItem key={todo.id} item={todo} /> <br/>
          </>
        ))
      }
    </>
  )
}

interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const { item } = props

  const editItemText = (evt: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemById(todoList, item.id, {
      ...item,
      text: evt.target.value
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemById(todoList, item.id, {
      ...item,
      isComplete: !item.isComplete
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = todoList.filter(foundItem => foundItem != item)

    setTodoList(newList)
  }

  return (
    <>
      <input type="text" value={item.text} onChange={editItemText}/>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </>
  )
}

const replaceItemById = (array: Todo[], itemId: number, newItem: Todo): Todo[] =>
  array.map(oldItem => oldItem.id === itemId ? {
    ...newItem,
    id: itemId
  } : oldItem)

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    console.log("adding item")
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ])

    setInputValue("")
  }

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value)
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </>
  )
}

let id = 0
const getId = () => id++

export enum Filter {
  ShowAll = "Show All",
  Completed = "Completed",
  Uncompleted = "Uncompleted"
}

const todoListFilterState = atom<Filter>({
  key: "todoListFilterState",
  default: Filter.ShowAll
})

const filteredTodoListSelector = selector({
  key: "filteredTodoListSelector",
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
    case Filter.Completed:
      return list.filter(todo => todo.isComplete)
    case Filter.Uncompleted:
      return list.filter(todo => !todo.isComplete)
    default:
      return list
    }
  }
})

const stringToFilterValue = (inputString: string): Filter => {
  switch (inputString) {
  case Filter.Completed: return Filter.Completed
  case Filter.Uncompleted: return Filter.Uncompleted
  default: return Filter.ShowAll
  }
}

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = (changeEvent: ChangeEvent<HTMLSelectElement>) => {
    const value = stringToFilterValue(changeEvent.target.value)
    console.log(`updating recoil filter transformed value = ${value}`)
    setFilter(value)
  }

  return (
    <>
      <select value={filter} onChange={updateFilter}>
        <option value={Filter.ShowAll}>All</option>
        <option value={Filter.Completed}>Completed</option>
        <option value={Filter.Uncompleted}>Uncompleted</option>
      </select>
    </>
  )
}

const todoListStatsSelector = selector({
  key: "todoListStatsSelector",
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter(item => item.isComplete).length
    const totalUncompletedNum = todoList.filter(item => !item.isComplete).length
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  }
})

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsSelector)

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Total completed: {totalCompletedNum}</li>
      <li>Total not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {percentCompleted}</li>
    </ul>
  )
}

const App = () => (
  <RecoilRoot>
    <TodoList />
  </RecoilRoot>
)

export default App
