import './App.css';
import React,{ Component } from 'react';
import './contact.css';
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';


import instagram from './images/insta.png';
import twitter from './images/twitter.png';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import gmail from './images/gmail.png';


class Contact extends Component{

  render(){

    
    return(
    <div className="main" >
        <div className="heading" id="adjust3"><span id="contacts"></span>Contact Me</div>



        <form action="https://formsubmit.co/suryaansh28@gmail.com" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="_subject" value="New Connect From Website"/>
            <input type="hidden" name="_template" value="box"/>
            <input type="hidden" name="_next" value="https://suryaanshrathinam.netlify.app/thankyou.html"/>
            <input type="hidden" name="_captcha" value="false"/>









            <div className="row">
             <div className="col-lg-6">  
            <label>Name:    </label>
            <input type="text" name="name" placeholder="(required)" required/>
            </div>
            <div className="col-lg-6" id="">
            <label>Email Id:</label>
            <input type="email" name="email" placeholder="(required)" required/>
            </div>
            </div>

            <div className="row">
            <label>Your Message: </label>
            <input type="text" name="message" id="msg"/>

            </div>
            <div className="row sub-row">
            <div className="col-lg-10"></div>
            <input type="submit" id="sub" class="btn btn-warning btn-lg" value="Send"/>
            </div>

        </form>






        <div className="other">
        Please feel free to reach out to me at any of my other handles:-
        </div>
        <div className="handles">
        <a href="https://github.com/suryaansh2002" target="_blank">
            <img src={github}  className="icon"/>
        </a>
        <a href="https://www.instagram.com/suryaansh2807/" target="_blank">
            <img src={instagram} className="icon"/>
        </a>
        <a href="https://twitter.com/SuryaanshR" target="_blank"> 
            <img src={twitter}  className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/suryaansh-rathinam-33a86b1b6/" target="_blank">
            <img src={linkedin}  className="icon"/>
        </a>
        <a href="mailto: suryaansh28@gmail.com" target="_blank">
            <img src={gmail}  className="icon"/>
        </a>


        </div>
    </div> 
      
    

    )
  }
}

export default Contact;
