import React from 'react'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'
import MainContent from './MainContent'
export default function App() {
    const firstName = "Bob"
    const lastName = "Zirell"
    let date = new Date() // javascript for getting the date
    date = new Date(2018,6,31,18)
    const hours = date.getHours()
    let timeOfDay
    //using javascript styling via objects we can make things more dynamic than regular 
    //old css at least with more ease in regards to when our javascript stuff cahgnes
    const h1styles = {
        fontSize: 30
    }

    if (hours <  12) {
        timeOfDay = "in the morning"
        h1styles.color = "blue"
    }
    else if(hours < 17){
        timeOfDay = "in the afternoon"
        h1styles.color = "orange"
    }
    else{
        timeOfDay = "at night"
        h1styles.color = "indigo"
    }

    const h2styles = {
        color: "gray",
        border: "2px solid teal"
    }
    return (
        <div>
            {/* for inline styling we make an object via cbs {} and then wrap our style in curly braces. 
            so 2 curly braces total, comma between styles, also wrap style value in strings 
            in cases where the key would normally have a dash(-) we remove it and capitalize the 
            next letter: background-color -> backgroundColor*/}
            <h1 style={{color: "#FF8C00", border: "2px solid black", backgroundColor: "teal"}}>
                Hello {firstName + " " + lastName}</h1>

            <h2 style = {h2styles}>It is currently about {date.getHours() % 12} o'clock {timeOfDay}.</h2>
            <h2 style = {h1styles}>It is currently about {date.getHours() % 12} o'clock {timeOfDay}.</h2>
            <NavBar />
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
