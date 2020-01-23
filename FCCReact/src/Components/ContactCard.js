import React from 'react'
import '../Styles/admin.css'
export default function ContactCard() {
    const h3Style = {
        padding: "20%"
    }

    return (
        <div className="contact-card">
            <img style={h3Style}src="http://placekitten.com/300/200"/>
            <h3>Mr. Whiskerson</h3>
            <p>Phone: (212) 555-5555</p>
            <p>Email: mr.whiskaz@catnap.com</p>
        </div>
    )
}
