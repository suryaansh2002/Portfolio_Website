import './App.css';
import React,{ Component } from 'react';
import dp from './images/profile.jpeg'
import './about.css'

class About extends Component{

  render(){
    return(
    <div className="main"  id="abouts">
    <div className="row" id="content">
        <div className="col-lg-8" >
        <div className="about">
        Hi There! <br></br>
        I'm <span className="name">Suryaansh Rathinam</span>.<br></br>
        A Computer Science undergrad at Manipal Institute of Technology. I'm always
         eager to learn new stuff and work on projects.<br />
        Love going on long drives, running, vibing to music, and binge watching shows and movies.
        Also, yeah cricket is the love of my life!
        </div>
        </div>
        <div className="col-lg-4">
        <img src={dp} alt="dp" className="dp w3-animate-zoom"></img>
        </div>
    </div>
    </div>
      
    )
  }
}

export default About;
