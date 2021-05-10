import './App.css';
import React,{ Component } from 'react';
import profile from './images/sr.png'
import './academics.css'

class Academics extends Component{

  render(){
    return(
    <div className="main">
        <div className="heading" id="adjustad"><span id="academics"></span>Acadmics </div>
        <div className="row academic">
            <div id="card2">
                 12th Boards:<br />
                93.60%
            </div>
            <div id="card2">
                 SAT:<br></br>
                 1560/1600
            </div>
            <div id="card2">
                 SUBJECT SAT:<br></br>
                 1590/1600
            </div>
            <div id="card2">
                 IELTS:<br></br>
                8/9
            </div>
 
            <div id="card2">
                 MET 2020:<br></br>
                Rank 924
            </div>
       </div> 
      
    
    </div>

    )
  }
}

export default Academics;
