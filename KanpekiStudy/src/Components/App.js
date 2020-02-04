import React, { Component } from 'react'
import VocabCard from '../Components/VocabPage/VocabCard'
import NavigationBar from './NavigationBar/NavigationBar'
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        < NavigationBar />
        <VocabCard />
      </div>
    )
  }
}

