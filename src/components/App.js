import React, { Component } from 'react'
import Projects from './Projects'
import Title from './Title'
import SocialProfiles from './SocialProfiles'
import Profile from '../assets/profile2.jpg'


class App extends Component {
    state = { displayBio: false }

    toggleDisplayBio = () => {
        this.setState({ displayBio : ! this.state.displayBio })
    }

    render() {
        return (
            <div>
                <img src={Profile} alt='Profile' className='profile'/> 
               <h1>Hello!</h1>
               <p>My name is Sumit</p> 
                <Title/>
               <p>I am always looking forward for working on meaningful projects</p>
               { this.state.displayBio ? (
                    <div>
                        <p>I live in India, and I code almost everyday</p>
                        <p>My favorite language is Python</p>
                        <p>Besides that, I also know java & javascript</p>
                        <p>With a little knowledge of shell script and familiarity with jboss deployment server</p>
                        <button onClick = {this.toggleDisplayBio} className="btn btn-primary">show less</button>
                    </div>
                 ) : (
                     <div>
                        <button onClick = {this.toggleDisplayBio} className="btn btn-primary">Read more</button>
                     </div>
                 )
                }
                <hr/>
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App