import { ToDoItem } from "./TodoItem"
import { default as TODOS } from "./mockToDos.json"
import { useState } from "react"
const todos = JSON.parse(JSON.stringify(TODOS))
const ToDoList = () => {
    const [toDoList, setToDoList] = useState(todos)
    console.log(toDoList)
    const toDoHandler = (index) => {
        const newTodos = [...toDoList]
        const item = newTodos[index]
        const newItem = { ...item, completed: !item.completed,  }
        newTodos[index] = newItem
        setToDoList(newTodos)
    }
    return toDoList.map(({ id, name, completed }, index) => <ToDoItem childId={id} childName={name} index={index} toDoHandler={toDoHandler} completed={completed} />)
}
export default ToDoList