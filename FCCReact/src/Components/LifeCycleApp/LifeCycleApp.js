import React, { Component } from 'react'
import Conditional from './Conditional'
import LoginButton from './LogInButton'
export default class LifeCycleApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoading: true,
             unreadMessages: ['a'],
             loggedIn: false,
             loggedInStatus: ["log in", "log out"]
        }
        this.handleLoginLogout = this.handleLoginLogout.bind(this)
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    handleLoginLogout(){
        console.log("clicked")
        this.setState(prevState =>{
            return {loggedIn : !prevState.loggedIn}
        })
    }

    render() {
        let loggedinStatusText = this.state.loggedIn ? "You are logged in" : "You are logged out"
        return (
                this.state.isLoading ? 
                <h1>Loading...</h1> :
                <div>
                <Conditional />
                {this.state.unreadMessages.length > 0 &&
                <h2>You have {this.state.unreadMessages.length} unread messages!</h2> 
                }   
                {this.state.loggedIn === false ? 
                <LoginButton handleLoginLogout = {this.handleLoginLogout} loggedInStatus = {this.state.loggedInStatus[0]}/> :
                <LoginButton handleLoginLogout = {this.handleLoginLogout} loggedInStatus = {this.state.loggedInStatus[1]}/>
                }
                <h1>{loggedinStatusText}</h1>
                </div>

                
        
        )
    }
}
