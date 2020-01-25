import React, {Component} from 'react'
import TodoListItems from './TodoListItems'
import Tododata from './Tododata'
import '../Styles/admin.css'
// export default function MainContent() {
//     const TodoList = Tododata.map(todo =>
//         <TodoListItems  todos = {todo} key = {todo.id}/>)
//     return (
//         <main className="todo-list">
//             {TodoList}
//         </main>
//     )
// }


    const img2 = e => (e.currentTarget.src = "https://www.fillmurray.com/200/101")
    const img1 = e => (e.currentTarget.src = "https://www.fillmurray.com/200/100")
    const initialImg = "https://www.fillmurray.com/200/100"


export default class MainContent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos: Tododata
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        //this.handleChangeTask = this.handleChangeTask.bind(this)
    }
    /** To update a specific TodoItem we are making a function that takes in an id and then
     * 1  use this.setState and make an arrow function with an argument of prevState so technically
     * our current list of todos. 
     * 2 create a const updatedTodos list and set it to a mapping of the prevState todos where each todo
     *  is checked to see if its id matches the id passed to the handleChange function and if it is
     * flips todo.completed to whatever it was not, so true -> false, false -> true.
     * the todo gets returned modified or not and creates our updatedTodos list and then we update todos
     * to be updatedTodos in the return of the setState function.
     */
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = ! todo.completed
                }
                return todo
            })
            return {
                todos : updatedTodos
            }
        })
    }
    //go through our array of todos make a new array and go through the old one checking each todo item
    // to see if the id matches the id param we pass to the function. if so change this todo items completed
    // value to the opposite, regardless return the todo item to our new array and then after we finish
    // going through the array we update our todos array to be our updatedTodos and return it.
    handleChange2(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = ! todo.completed
                }
                return todo
            })
            return {
                todos : updatedTodos
            }
        })
    }
    // handleChangeTask(task){
    //     this.setState (prevState =>{
    //         const updatedTodos = prevState.todos.map(todo => {
    //             if(todo.task === task){
    //                 todo.task = "New task"
    //             }
    //             return todo
    //         })
    //         return {todos: updatedTodos}
    //     })
    // }

    render() {
        const todoItems = this.state.todos.map(todo => <TodoListItems todos = {todo} key = {todo.id}
        handleChange2 = {this.handleChange2} handleChangeTask = {this.handleChangeTask}/>)
        return (
            <div>
                <main className="todo-list">
                    {todoItems}
                </main>
                <img onMouseOver={img2} onMouseOut={img1} src={initialImg}></img>
            </div>
        )
    }
}




