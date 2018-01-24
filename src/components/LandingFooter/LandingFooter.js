import React, { Component } from "react"
import "./LandingFooter.css"

export default class LandingFooter extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
    const str = this.props.strings

		return(
      <div className="landing-footer">
			 <h1>{str.footer}</h1>
      </div>
    )
	}
}