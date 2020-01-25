import React, { Component, useState } from 'react'
import StatePractice from './StatePractice.js'
import StatePracticeRedo from './StatePracticeRedo'
export default class StateApp extends Component {
    constructor() {
        //goes to parent class and brings some goodies down
        super()
        this.state = {
            answer: "yes",
            age: "21"
        }
    }
    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <h2>{this.state.age} years old</h2>
                {/* <ChildComponent answer={this.state.answer}/> */}
                {/* We can create an instance of a class object using <ObjectName /> like a normal prop */}
                <StatePractice />
                <StatePracticeRedo />
                <StatePracticeRedo />
            </div>
        )
    }
}
