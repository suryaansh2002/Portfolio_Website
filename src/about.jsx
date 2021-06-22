import './App.css';
import React,{ Component } from 'react';
import dp from './images/profile.jpeg'
import './about.css'
import Typewriter from 'typewriter-effect';


class About extends Component{


  render(){
    return(
    <div className="main"  id="abouts">
    <div className="row" id="content">
        <div className="col-lg-8" >
        <div className="about">
        Hi There! <br></br>
        I'm <span className="name">Suryaansh Rathinam</span>.<br></br>
        A Computer Science undergrad at Manipal Institute of Technology. Continously working on new stuff to 
        develop my skill-set. <br></br>
          Looking forward to working on projects, collaborating, and learning with anyone with similar interests. <br></br> 
          Do reach out to me if you feel you've got something that would interest me.
        <br></br>
        </div>
        </div>
        <div className="col-lg-4">
        <img src={dp} alt="dp" className="dp w3-animate-zoom"></img>
        </div>
    <div className="typing">
    <Typewriter
  options={{
    strings: ['WEB-DEVELOPER', 'ML ENTHUSIAST','COMPETITVE PROGRAMMER', 'DATA SCIENCE ENTHUSIAST'],
    autoStart: true,
    loop: true,

  }}
/>

    </div>
    </div>

    </div>
      
    )
  }
}

export default About;
