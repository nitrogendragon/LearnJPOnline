import React, {Component} from 'react'
import ProfileData from './ProfileData'
// export default function App5() {
//     return (
//         <div>
//             <h1>Code goes here</h1>
//         </div>
//     )
// }

//React class component setup instead of functional component, must extends React.Component
// class App5 extends React.Component {

//     yourMethodHere() {

//     }

//     //must use this render function
//     render() {
//         //logic, conditional rendering, inline styling can go in here if you want
//         const date = new Date();
//         return (
//             <div>
//                 {/* For using props with classes we just have to use {this.props} as it is the class
//                 objects props we are using */}
//                 <h1>{this.props.whatever}</h1>
//                 <h1>Code goes here</h1>
//             </div>
//         )
//     }
// }
class App5 extends React.Component {
    render() {
        return (
            <div>
                {/* we can pass parameters here to be used in our classes functions */}
                <Header username = "vSchool"/>
                <Greeting />
            </div>
        )
    }
}

class Header extends React.Component {
    // Welcome(props)
    // {
    //     return(
    //     <header>
    //         {/* Always make sure to refer to props with the this operator */}
    //         <p>Welcome, {this.props.info.username}!</p>
    //     </header>
    //     )
    // }
    render() {
        
        return(
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
            
        )
        
    }
}

class Greeting extends Component {
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        }
        else if(hours < 17) {
            timeOfDay = "afternoon"
        }
        else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}


export default App5


