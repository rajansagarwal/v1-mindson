import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

class Story extends Component {
	render() {
		return (
			
		<section className="story">
			<Container>
			<Row>
			<Col sm={12}>
			<h3 className="title">About</h3>
			<h4>
			In our polarized world, stress is omnipresent—and yet finding solutions is more difficult than ever. <br/><br/>We are a group of teens that aim to redefine the help you get for mental health through a dynamic approach of <a href="https://heyrajan.com">community engagement</a> and <a href="https://heyrajan.com">centralization.</a></h4>
			</Col>
			</Row>
			</Container>
			</section>
		)	
	}
}

export default Story;