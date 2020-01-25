import React, { Component } from 'react'

export default class StatePracticeRedo extends Component {
    constructor(){
        super()
    this.state = {
        name: "practor",
        age: "23",
        loggedin: true
    }
    }
    
    render() {
        let worddisplay = this.state.loggedin === true ? "in":"out"
        return (
            <div>
                <h1>{"Hi, I am " + this.state.age + " years old." + "My name is " + this.state.name}.</h1>
                <h2>You are currently logged {this.state.loggedin === true ? "in":"out"}</h2>
                <h2>You are currently logged {worddisplay}</h2>
            </div>
        )
    }
}
