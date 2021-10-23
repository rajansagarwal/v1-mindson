import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

class Hero extends Component {
	render() {
		return (
			<div>

					<div className="header"><div className="break"/>
					<section className="bigbackground"><div className="centred"><h1 className="normal">We are Minds On</h1><div className="horizontal desktop">

			<div className="navbutton">
			<a href="">Recent</a> 
			</div>
			<div className="navbutton">
			<a href="">Initiatives</a> 
			</div>
			
			<div className="navbutton">
			<a href="">Hub</a> 
			</div>
			</div></div></section>
					<section className="main">
					{/*<h2 style={{fontWeight: 'bold'}}>Minds On <a href="https://heyrajan.com"></a></h2>*/}
			<h4>
			<div className="horizontal mobile">

			<div className="navbutton">
			<a href="">About</a> 
			</div>
			<div className="navbutton">
			<a href="">About</a> 
			</div>
			
			<div className="navbutton">
			<a href="">About</a> 
			</div></div></h4>
			</section>
		
						</div></div>
		)	
	} 
}

export default  Hero;