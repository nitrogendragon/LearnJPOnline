import React from 'react'
import Joke from './Joke.js'
import JokesData from './JokesData.js'
export default function App3() {
    // We can map over our data and return a component for each item we have data for with minimal
    // lines of code using the map function with an arrow function for example.
    // we cann also use a ternary operator to filter our results as seens below
    const jokeComponents = JokesData.map( 
        jokeitem => String(jokeitem.question).length > 30 ?
        <Joke key = {jokeitem.id}question={jokeitem.question} joke={jokeitem.joke}/> : null
    )
         
    return (
        <div>
            {/* quick and easy one line to put all our jokes in here */}
            {jokeComponents}
            {/* < Joke question="What did the doc say to the dock?" 
                joke="Looks like you've got a broken board. Must be pretty painful.
                 Don't worry though, I can make it feel like it isn't even there."
            />
            < Joke joke="I'd try to make everyone here laugh, 
                but you've yet to ask a question dumb enough for me to do so." 
            />
            < Joke joke="If you want a joke, look at yourself in the mirror, I wrote one on your forehead." 
            />
            < Joke question= "Why couldn't the college grad find a job?"
            joke="His application submitting algorithm couldn't keep up with the other applicants." 
            />
            < Joke question= "Why is it hard for some people to come up with jokes?"
            joke=" Not everyone has a funny bone." 
            /> */}
        </div>
    )
    
}
