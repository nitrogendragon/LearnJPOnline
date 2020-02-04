import React, { Component } from 'react'
import VocabData from '../../Data/vocabulary.json'
import '../../styles/vocabCard.css'
export default class VocabCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="flexbox-vocab-item">
                {VocabData.map( (vocabItem) => {
                return <h1>{vocabItem.word}</h1>
                })}
            </div>
        )
    }
}
