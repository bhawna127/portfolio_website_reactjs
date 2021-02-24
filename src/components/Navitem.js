import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navitem extends Component{
	
  
  render(){
   	return (
   		<li>
   		  <Link className={this.props.activeItem === this.props.item ? "active" : ""} to={this.props.tolink} onClick={()=>this.props.activec(this.props.item)}>{this.props.item}</Link>
   		</li>
   	);
  }
}

export default Navitem;