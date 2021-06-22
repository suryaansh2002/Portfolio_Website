import './App.css';
import React,{ Component } from 'react';
import './skills.css';
//import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'




import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'

import bootstrap from './images/bootstrap.png'
import sass from './images/sass.png'
import node from './images/node.png'
import mongo from './images/mongodb.png'

import php from './images/php.png'
import express from './images/express.jpg'
import redux from './images/redux.png'

import mysql from './images/mysql.png'
import git from './images/git.png'
import matlab from './images/matlab.png'
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
    <div className="heading" id="adjust"><span id="skills"></span>Skills 
</div>
    <div className="row">
    <span className='first'>
       
        
  <div class="card-container">
	<div class="front">
  <img src={html} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star"/>
  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={css} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  </div>
</div>
  <div class="card-container">
  
	<div class="front">
  <img src={js} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  </div>
</div>
  <div class="card-container">
	<div class="front">
  <img src={react} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star"/>
  </div>
</div>
  <div class="card-container">
	<div class="front">
  <img src={bootstrap} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star"/>
  </div>
</div>

<div class="card-container">
	<div class="front">
  <img src={sass} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star"/>
  </div>
</div>


<div class="card-container">
	<div class="front">
  <img src={node} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={mongo} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  </div>
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


<div class="card-container">
	<div class="front">
  <img src={php} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star"/>
  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={express} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={redux} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star" />
  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={mysql} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />

  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={git} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />

  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={matlab} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star" />

  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={c} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />

  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={cpp} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star" />

  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={python} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star" />


  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={numpy} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />

  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={pandas} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star" />

  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={matplotlib} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />

  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={seaborn} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star" />


  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={scikit} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />

  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={selenium} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star" />


  </div>
</div>
<div class="card-container">
	<div class="front">
  <img src={flutter} className="logo"></img>
  </div>
	<div class="back">
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStar} className="star" />
  <FontAwesomeIcon icon={faStarHalf} className="star" />

  </div>
</div>




</div> 
)

export default Skills;
