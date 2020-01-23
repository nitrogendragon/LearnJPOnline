import React from 'react'
import '../Styles/admin.css'
export default function ContactCard(props) {
    const h3Style = {
        paddingLeft: "14%",
        
    }

    return (
        <div className="contact-card">
            <img style={{width: "50%"}} src= {props.contact.imgUrl}/>
            <h3 style={h3Style}>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}
