import React, { Component } from 'react'

export default class FormsApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName: "",
             lastName: "",
             isFriendly: true,
             textAreaText: "",
             gender: "",
             favColor: "blue"

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event)
    {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) :
        this.setState({
            //putting name in a box converts string into object for this purpose at least of changing 
            //this.state.firstName or .lastName, whichever is being targeted
            [name]: value
        })
    }
    
    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}></input>
                <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}></input>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            
            
            {/* a text box we can type in essentially */}
            <textarea name="textAreaText" 
            value={this.state.textAreaText} 
            placeholder="Write something"
            onChange={this.handleChange}/>
            <h1>{this.state.textAreaText}</h1>
            
            <label>
            <input 
            type="checkbox" 
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}/>
            isFriendly?</label>
            <br></br>
            <label>
            <input 
            type="radio" 
            name="gender"
            value="male"
            checked={this.state.gender === "male"} 
            onChange={this.handleChange}/>
            Male</label>
            <br></br>
            <label>
            <input 
            type="radio" 
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}/>
            Female</label>
            <br/>
            <label>Favorite Color: </label>
            <select value={this.state.favColor} onChange ={this.handleChange} name="favColor">
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
            <br/>
            <h1>Your favorite color is {this.state.favColor}.</h1>
            <h1>{this.state.gender}</h1>
            <button >Submit</button>
            </form>
            
        )
    }
}

