import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Scroll from './Scroll';

class About extends Component {
	render() {
		return (
			<section id="about">	<div className="break"/>		
					<h3 className="highlights">Highlights</h3>
			<h4>
			✍️ We Are Searching For Writers! Apply now at <a className="spanlink" href="https://google.com">bit.ly/12345</a><div className="largebreak"/>
			🎙 We just announced our podcast: <a className="spanlink" href="https://google.com">Brain Freeze</a><div className="largebreak"/>
			🧠 We want to know how we can <a className="spanlink" href="https://google.com">make Minds On better</a></h4>
			<Container>
			<Row>
			<Col sm={7}>
			<h3>About</h3>
			<h4>Everyone is affected by mental health.</h4>
			</Col>
		<Col sm={5}>
		<br/>
			<img src="https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80" alt="side" className="sideimage"/><br/>
			</Col>
		
					</Row>
					<Row>
				
						<h3 className="initiativesheader">A Few Things For This Year...</h3><br/>
						</Row><Row className="cards">
					<Col sm={4}>
					<div><div className="card"><h4 className="special">Downtown Central</h4></div><br/></div>
			</Col>
			<Col sm={8}>
					<div className="card"><h4 className="special">The Brain Freeze Podcast</h4></div><br/>
			</Col>
			<Col sm={6}>
						<div className="card"><h4 className="special">Let's Talk.</h4></div><br/>
			</Col>
			<Col sm={6}>
					<div className="card"><h4 className="special">Mental Health Summit</h4></div>
			</Col>
			<Col sm={6}>
						<div className="card"><h4 className="special">AMAs.</h4></div><br/>
			</Col>
			<Col sm={6}>
					<div className="card"><h4 className="special"></h4></div>
			</Col>
					</Row>
			<br/>
			</Container></section>
		)	
	}
}

export default About;