import React, { Component } from 'react'

export default class StatePractice extends Component {
    constructor() {
        super()
        this.state = {
             name : "bob",
             age : "21"
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.age}</h2>
            </div>
        )
    }
}


