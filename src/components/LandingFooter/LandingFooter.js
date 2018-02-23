import React, { Component } from "react"
import config from "../../values/config"
import "./LandingFooter.css"

export default class LandingFooter extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
    const str = this.props.strings
    const logo = this.props.logo

		return(
      <div className="landing-footer container">
        <div className="footer-col" style={{flex: 1}}>
          <img className="footer-logo" src={logo} />
        </div>
        <div className="footer-col" style={{flex: 1}}>
          <h3>Placeholder</h3>
        </div>
        <div className="footer-col" style={{flex: 1}}>
          <h3>{str.more}</h3>
          <div>
            <a className="footer-link" href={config.privacyPolicyLink}>
              <span>Privacy Policy</span>
            </a>
          </div>
          <div>
            {/*<a className="footer-link" href={config.termsAndConditionsLink}>
              <span>Terms & Conditions</span>
            </a>*/}
          </div>
        </div>
      </div>
    )
	}
}