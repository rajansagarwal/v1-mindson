import React, { Component } from 'react';

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
			</div><br/><br/>
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
			</div><br/><br/>
			</div>
			<h3 className="title">About</h3>
			In our polarized world, stress is omnipresent—and yet finding solutions is more difficult than ever. <br/><br/>We are a group of teens that aim to redefine the help you get for mental health through a dynamic approach of <a href="https://heyrajan.com">community engagement</a> and <a href="https://heyrajan.com">centralization.</a></h4>
			</section>
		
						</div></div>
		)	
	} 
}

export default  Hero;