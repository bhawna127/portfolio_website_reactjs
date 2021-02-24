import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component{
   render(){
       return (
         <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard  title="B.Tech in Computer Science and Engineering" where="Uttarakhand Technical University"
             from="2013" to="2016"/>
            <Widecard title="Diploma in Information Technology" where="UBTER" from="2011" to="2013"/>
         </div>
       );
   }
}

export default Education;