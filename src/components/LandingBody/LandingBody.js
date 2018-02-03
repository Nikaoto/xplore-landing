import React, { Component } from "react"
import "./LandingBody.css"

export default class LandingBody extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		const str = this.props.strings

		return(
      <div className="landing-body">
      	<div className="heading-container">
      		<h1 className="heading">{str.heading}</h1>
      		<p className="heading-paragraph">{str.headingParagraph}</p>
      	</div>
      </div>
		)
	}
}