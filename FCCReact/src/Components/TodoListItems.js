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


    function UodateCheckBox(){

    }

    return (
        <div style={todoListItemStyle}>
            <input onChange={()=>console.log("clicked")} type="checkbox" 
            checked= {props.todos.completed}></input> {props.todos.task}
        </div>
    )
}
