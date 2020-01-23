import React from 'react'

export default function Product(props) {
    const productStyle = {
        display : "flex",
        width: "50%",
        flexDirection: "column",
        border : "4px solid black",
        justifyContent : "center",
        alignItems : "center"
    }
    // We always return html in the child component and pass the html parameters via props which will
    // come from some data resource (.js, .json, etc)
    return (
        <div style={productStyle}>
            <img src={props.product.imgUrl}/>
            <h3>{props.product.name}</h3>
            <h4>Price: {props.product.price.toLocaleString("en-US", {style:"currency", currency: "USD"})}</h4>
            <p style = {{border: "1px solid black"}}>{props.product.description}</p>
        </div>
    )
}
