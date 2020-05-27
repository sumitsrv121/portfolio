import React, { Component } from 'react'

const Joke = (porps) => {
    const {setup, punchline} = porps.joke

    return <p style={{margin: 20}}>{setup} <em>{punchline}</em></p>
}

class Jokes extends Component {
    state = { joke: {}, singleJoke: true, jokes: [] }

    componentDidMount() {
        this.getSingleJoke()
    }

    getSingleJoke = () => {
        fetch('https://official-joke-api.appspot.com/random_joke').then((res) => {
            return res.json()
        }).then((val) => {
            this.setState({joke: val})
        }).catch((error) => {
            console.log(error)
        })
        this.setState({singleJoke: true})
    }

    getMoreJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten').then((res) => {
            return res.json()            
        }).then((val) => {
            this.setState({jokes: val})
        }).catch((error) => {
            console.log(error)
        })
        
        this.setState({singleJoke: false})
    }

    render() {
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <div>
                
                </div>
                {this.state.singleJoke ? (
                    <div>
                        <button className="btn btn-success" onClick={this.getMoreJokes}>Get 10 Jokes</button>
                        <Joke joke = {this.state.joke}/>
                    </div>
                ): (
                    <div>
                        <button className="btn btn-success" onClick={this.getSingleJoke}>Get a Joke</button>
                        {
                            this.state.jokes.map((j) => {
                                return (
                                    <Joke key={j.id} joke={j}/>
                                )
                            })
                        }
                        
                    </div>
                ) }
                
            </div>
        )
    }
}

export default Jokes