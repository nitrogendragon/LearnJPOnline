import React from 'react'
import ToDo from './ToDo'
// takes in our todos list/array as a parameter 
export default function ToDoList( { todos, toggleTodo }) {
    return (
        todos.map(todo => {
            return <ToDo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        })
        // <div>
        //     {todos.length}
        // </div>
    )
}
