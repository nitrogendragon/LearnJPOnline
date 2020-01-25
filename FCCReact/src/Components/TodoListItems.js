import React from 'react'

export default function TodoListItems(props) {
    const todoListItemStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor : "azure",
        borderBottom: "2px solid silver",
        padding: "5px 10px 5px 0px",
        margin: 10,
        width: "70%"
    }
    const todoListItemCompletedStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "azure",
        textDecoration: "line-through",
        fontStyle : "italic",
        borderBottom: "2px solid silver",
        padding: "5px 10px 5px 0px",
        margin: 10,
        width: "70%"
    }



    return (
        <div style={props.todos.completed ? todoListItemCompletedStyle : todoListItemStyle}>
            {/* to use MainContents handleChange function in onChange we use an arrow function with
            event as the passed parameter and return props.handleChange with props.todos.id passed
            as the id parameter for the handleChange function */}
            <input onChange={(event)=> props.handleChange2(props.todos.id)} type="checkbox" checked= {props.todos.completed}></input> {props.todos.task}
        </div>
    )
}
