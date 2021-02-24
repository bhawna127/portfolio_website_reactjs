import React, {Component} from 'react';
import Navitem from './Navitem';

class Navbar extends Component{
	constructor(props){
    	super(props);

		this.state ={
			NavItemActive:''
		}

		this.activeitem = (x) => {
			this.setState({
				NavItemActive: x
			});
	  	};
	}

	render(){
		return (
			<nav>
			  <ul>
			    <Navitem item="Home" tolink="/" activec={this.activeitem} activeItem={this.state.NavItemActive}></Navitem>
			    <Navitem item="About" tolink="/about" activec={this.activeitem} activeItem={this.state.NavItemActive}></Navitem>
			    <Navitem item="Education" tolink="/education" activec={this.activeitem} activeItem={this.state.NavItemActive}></Navitem>
			    <Navitem item="Skills" tolink="/skills" activec={this.activeitem} activeItem={this.state.NavItemActive}></Navitem>
			    <Navitem item="Contact" tolink="/contact" activec={this.activeitem} activeItem={this.state.NavItemActive}></Navitem>
			  </ul>
			</nav>
		);
	}
}

export default Navbar;