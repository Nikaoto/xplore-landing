import React, { Component } from "react"
import AppStoreButton from "../AppStoreButton"
import allStyles from "./styles"
import config from "../../values/config"
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
        <div className="col-md-5" style={styles.buttonContainer}>
          <AppStoreButton
            storeName={"Google Play"}
            storeLink={config.playStoreLink}
            blackIcon={require("./img/android_black.png")}
            whiteIcon={require("./img/android_white.png")}
            animationTime={100}
          />
          <AppStoreButton
            storeName={"App Store"}
            storeLink={config.appleStoreLink}
            blackIcon={require("./img/apple_black.png")}
            whiteIcon={require("./img/apple_white.png")}
            animationTime={100}
          />
        </div>
      </div>
		)
	}
}