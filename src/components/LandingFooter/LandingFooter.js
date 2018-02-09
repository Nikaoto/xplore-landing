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
      <div className="landing-footer container">
        <div className="footer-col" style={{flex: 2}}>
          {/* Logo goes here */}
          <h3>Placeholder</h3>
        </div>
        <div className="footer-col" style={{flex: 1}}>
          <h3>Placeholder</h3>
        </div>
        <div className="footer-col" style={{flex: 1}}>
          <h3>More</h3>
          <div>
            <a className="footer-link" href={privacyPolicyLink}>
              <span>Privacy Policy</span>
            </a>
          </div>
          <div>
            <a className="footer-link" href={termsAndConditionsLink}>
              <span>Terms & Conditions</span>
            </a>
          </div>
        </div>
      </div>
    )
	}
}

const privacyPolicyLink = "https://xplore.ge/privacy-policy"
const termsAndConditionsLink = "https://xplore.ge/terms-and-conditions"