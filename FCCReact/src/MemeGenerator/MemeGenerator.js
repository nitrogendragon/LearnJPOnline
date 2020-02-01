import React, { Component } from 'react'

export default class MemeGenerator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             topText: "",
             bottomText: "",
             randomImg: "http://i.imgflip.com/1bij.jpg",
             allMemeImgs: [],
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleImgChange=this.handleImgChange.bind(this)
    }

    

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes[0])
            this.setState({allMemeImgs : memes})
        })
    }
    handleImgChange(e)
    {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({randomImg: randMemeImg})
    }
    handleChange(e){
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    render() {
        return (
            <>
            <form className="meme-form" onSubmit={this.handleImgChange}>
                <input className="input"
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={this.state.topText}
                    onChange={this.handleChange}
                />
                <input className="input"
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                />

                <button>Generate</button>
            </form>
            <div className="meme">
                <img src={this.state.randomImg} alt="" />
                <h2 className="top">{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>
            </div>
            </>
        )
    }
}
