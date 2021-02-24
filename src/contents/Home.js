import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/avtar.png';
import Social from '../components/Social';

class Home extends Component{
    render(){
        return (
            <div className="condiv Home">
                <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={["I am Bhawna Pandey","I am a full stack developer"]} speed={100} eraseDelay={700} />
                <Social/>
            </div>
        );
    }
}

export default Home;