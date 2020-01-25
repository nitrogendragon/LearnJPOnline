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
    }
    
    handleClick() {
        console.log("I was clicked")
    }

    render() {
        const todoItems = this.state.todos.map(todo => <TodoListItems todos = {todo} key = {todo.id}/>)
        return (
            <div>
                <main className="todo-list">
                    {todoItems}
                </main>
                <img onMouseOver={img2} onMouseOut={img1} src={initialImg}></img>
                <button onClick={this.handleClick}>Click and See what happens</button>
            </div>
        )
    }
}




