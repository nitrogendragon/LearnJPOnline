import React from 'react'

export default function TodoListItems() {
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



    return (
        <div style={todoListItemStyle}>
            <input type="checkbox"></input> Clean up
        </div>
    )
}
