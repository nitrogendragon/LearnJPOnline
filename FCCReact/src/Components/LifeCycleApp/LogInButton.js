import React from 'react'

export default function LogInButton(props) {
    return (
        <div>
            <button onClick={props.handleLoginLogout}>{props.loggedInStatus}</button>
        </div>
    )
}
