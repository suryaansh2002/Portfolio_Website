import './App.css';
import React,{ Component } from 'react';
import './skills.css';
//import $ from 'jquery';

import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.jpg'

import bootstrap from './images/bootstrap.png'
import sass from './images/sass.png'
import node from './images/node.png'
import php from './images/php.png'

import mysql from './images/mysql.png'
import git from './images/git.png'
import c from './images/c.png'
import cpp from './images/c++.png'

import python from './images/python.png'
import numpy from './images/numpy.png'
import pandas from './images/pandas.png'
import matplotlib from './images/matplotlib.png'

import seaborn from './images/seaborn.png'
import scikit from './images/scikit.png'
import selenium from './images/selenium.png'
import flutter from './images/flutter.png'


class Skills extends Component{
    constructor () {
        super()
        this.state = {
          isHidden: true,
          text:'Show more...',
          
        }
        this.toggleHidden=this.toggleHidden.bind(this)
      }
      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden,
        })
      }
    
     render(){
   
    return(
    <div className="main" >
    <div className="heading" id="adjust"><span id="skills"></span>My Skills</div>
    <div className="row">
    <span className='first'>
        <div id="card">
        <img src={html} className="logo"></img>
        </div>
        <div id="card">
        <img src={css} className="logo"></img>
        </div>
        <div id="card">
        <img src={js} className="logo"></img>
        </div>
        <div id="card">
        <img src={react} className="logo"></img>
        </div>

        <div id="card">
        <img src={bootstrap} className="logo"></img>
        </div>
        <div id="card">
        <img src={sass} className="logo"></img>
        </div>
        <div id="card">
        <img src={node} className="logo"></img>
        </div>
        <div id="card">
        <img src={php} className="logo"></img>
        </div>
    </span>
    {!this.state.isHidden && <Second />}

    

    </div>
    <div className="more">
        <button onClick={this.toggleHidden.bind(this)} className="btn btn-lg btn-warning">{this.state.isHidden ? 'Show More...' : 'Show Less...'}</button>
    </div>  
    </div>
    )
  }
}
const Second = () => (

<div className="second">    
<div id="card">
<img src={mysql} className="logo"></img>
</div>
<div id="card">
<img src={git} className="logo"></img>
</div>
<div id="card">
<img src={c} className="logo"></img>
</div>
<div id="card">
<img src={cpp} className="logo"></img>
</div>

<div id="card">
<img src={python} className="logo"></img>
</div>
<div id="card">
<img src={numpy} className="logo"></img>
</div>
<div id="card">
<img src={pandas} className="logo"></img>
</div>
<div id="card">
<img src={matplotlib} className="logo" id="plt"></img>
</div>

<div id="card">
<img src={seaborn} className="logo" id="plt"></img>
</div>
<div id="card">
<img src={scikit} className="logo"></img>
</div>
<div id="card">
<img src={selenium} className="logo"></img>
</div>
<div id="card">
<img src={flutter} className="logo"></img>
</div>
</div> 
)

export default Skills;
