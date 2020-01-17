/* react is state based, when we want to change our toDo list for example we need to update
the state thus when we import React, we need to add (, {useState} ) after typing import React and 
then still finish with ( from 'react';) as seen below*/ 
import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './ToDoList'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()//storing our input value in this const
  //Loads our todos on reload
  useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])
  //Saves our todos on local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    //this => operator can be read as 'that has'
    //in this case find the todo 'that has' the todo.id === id
    // more specifically it is called an arrow function
    // wherein the left side is the input and the right side is the ouput
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }


  function handleAddToDo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    /* this empty tag is called a fragment which will let us return it as a single item even 
    while there are several items inside of it */
    <>
    {/* This is JSx which is essentially reacts version of html
    allows embedding components inside other components
    Specifically this is referencing our ToDoList.js */}
    <ToDoList  todos={todos} toggleTodo={toggleTodo}/>
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddToDo}>Add ToDo</button>
    <button onClick={handleClearTodos}>Clear Completed Todos</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
