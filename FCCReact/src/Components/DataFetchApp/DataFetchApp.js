import React, { Component } from 'react'

export default class DataFetchApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: false,
             character: {}
        }
    }

    componentDidMount() {
        this.setState({loading : true})
        fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState(
                {character : data,
                moves : []}
                )
            })
        this.setState({loading: false})
    }

    render() {
        return (
            this.state.loading ?
            <div>
                <h1>Loading...</h1>
            </div>
            :
            <div>
                {this.state.character.name}
            </div>
        )
    }
}
