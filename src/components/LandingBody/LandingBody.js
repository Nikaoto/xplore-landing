import React, { Component } from "react"
import PlayStoreButton from "../PlayStoreButton"
import allStyles from "./styles"
import "./LandingBody.css"

export default class LandingBody extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		const str = this.props.strings
		const styles = allStyles(this.props.language);

		return(
      <div className="landing-body row">
      	<div className="heading-container col-md-9">
      		<h1 className="heading-title" style={styles.headingTitle}>{str.heading}</h1>
      		<p className="heading-paragraph" style={styles.headingParagraph}>{str.headingParagraph}</p>
      	</div>
        <div className="heading-container col-md-10">
          <PlayStoreButton/>
        </div>
      </div>
		)
	}
}