import React, { Component } from 'react';

class Hero extends Component {
	render() {
		return (
			<main>

				
					<section className="bigbackground"><div className="centred"><h1 className="normal">We are Minds On</h1><div className="horizontal desktop">

			<div className="navbutton">
			<a href="https://google.com">Recent</a> 
			</div>
			<div className="navbutton">
			<a href="https://google.com">Initiatives</a> 
			</div>
			
			<div className="navbutton">
			<a href="https://google.com">Hub</a> 
			</div>
			</div></div></section>
					<section className="main">
					{/*<h2 style={{fontWeight: 'bold'}}>Minds On <a href="https://heyrajan.com"></a></h2>*/}
			<h4>
			<div className="horizontal mobile">

			<div className="navbutton">
			<a href="https://google.com">About</a> 
			</div>
			<div className="navbutton">
			<a href="https://google.com">About</a> 
			</div>
			
			<div className="navbutton">
			<a href="https://google.com">About</a> 
			</div></div></h4>
			</section>
		
						</main>
		)	
	} 
}

export default  Hero;