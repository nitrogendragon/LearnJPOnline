import React, { Component } from 'react'
import FormsPracticeComponent from './ForsmPracticeComponent'
export default class FormsPractice extends Component {
    constructor(props) {
        super(props)
        this.state ={
            firstName: "",
            lastName: "",
            destination:  "",
            age: "",
            gender: "",
            isVegan: false,
            isKosher: false,
            isLactoseIntolerant: false
             
             
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    

    handleSubmit(e){

    }
    handleChange(event)
    {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({
                [name]: checked}) :
        this.setState({
            //putting name in a box converts string into object for this purpose at least of changing 
            //this.state.firstName or .lastName, whichever is being targeted
            [name]: value
        })
    }

    render() {
        return(
        <FormsPracticeComponent handleChange={this.handleChange} {...this.state}/>
        // <FormsPracticeComponent handleChange={this.handleChange} data={this.state}/>
        )
    }
}
