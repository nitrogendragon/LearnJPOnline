import React from 'react'
import Product from './Product'
import ProductData from './ProductData'
export default function App4() {

    const ProductComponents = ProductData.map(item =>
        <Product product = {item} key = {item.id} />)
    return (
        <div style = 
            {
                {display: "flex", flexDirection: "column", 
                justifyContent: "center", alignItems: "center"}
            }>
            {ProductComponents}
        </div>
    )
}
