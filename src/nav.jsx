import './App.css';
import React,{ Component } from 'react';
import profile from './images/sr2.svg'
import './nav.css'

class Nav extends Component{

  render(){
    return(
      


<nav class="navbar navbar-expand-lg" id="head">
  <a class="navbar-brand" href="#">
  <img className="profile" src={profile} width="30" height="30" alt=""></img>
    
  </a>
  
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#abouts">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link item" href="#skills">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#academics">Academics</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contacts">Contact</a>
      </li>
    </ul>
  </div>
</nav>
      
    )
  }
}

export default Nav;
