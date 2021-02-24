import React, { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component{
   render(){
       return(
           <div className="condiv">
              <h1 className="subtopic">Contact Me</h1>
              <h3>Email: bhawna.softprodigy@gmail.com</h3>
              <h3>Github: bhawna127</h3><br></br>
              <Social />
           </div>
       );
   }
}

export default Contact;