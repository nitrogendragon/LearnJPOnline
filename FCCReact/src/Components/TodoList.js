import React from 'react'
import TodoListItems from './TodoListItems'
import '../Styles/admin.css'
export default function TodoList() {
    return (
        <div className="todo-list">
            <TodoListItems />
            <TodoListItems />
            <TodoListItems />
            <TodoListItems />
        </div>
    )
}
