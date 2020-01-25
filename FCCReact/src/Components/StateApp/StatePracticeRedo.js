import React, { Component } from 'react'

export default class StatePracticeRedo extends Component {
    constructor(){
        super()
        this.state = {
            name: "practor",
            age: 23,
            loggedin: true
        }
        //makes sure that the handle click method is bound to the context of this as it exists within the class
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        //to update age we need to pass this.state.age+1. if we tried to pass age without the this. it
        //will be undefined
        //   this.setState({age: this.state.age+1})
        //arrow function method
        this.setState(prevState => 
            {
                return {
                    age: prevState.age + 1
                }
            }
            )
    }
    
    
    render() {
        let handleClicks = () => this.setState({age: this.state.age / 2})
        let worddisplay = this.state.loggedin === true ? "in":"out"
        return (
            <div>
                <h1>{"Hi, I am " + this.state.age + " years old." + "My name is " + this.state.name}.</h1>
                <h2>You are currently logged {this.state.loggedin === true ? "in":"out"}</h2>
                <h2>You are currently logged {worddisplay}</h2>
                <button onClick={this.handleClick}>Change this count with a function {this.state.age}</button>
                <button onClick={handleClicks}>Change this count with a  arrow function {this.state.age}</button>
            </div>
        )
    }
}
