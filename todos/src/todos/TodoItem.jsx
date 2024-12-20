export const ToDoItem = ({ childId, childName, index, toDoHandler, completed }) => {
    return <h1 key={index}>I am the item {childId}
        <br /> {childName}
        <input type="checkbox" onChange={() => toDoHandler(index)} checked = {completed}/>
    </h1>
}