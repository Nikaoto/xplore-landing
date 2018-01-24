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
			 <h1>{str.body}</h1>
      </div>
		)
	}
}