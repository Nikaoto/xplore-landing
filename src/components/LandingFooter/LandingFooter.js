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
        <div className="footer-col" style={{flex: 2}}>
          <img className="footer-logo" src={logo} />
        </div>
        <div className="footer-col" style={{flex: 3}}>
          <div>
            <h3>{str.contact}</h3>
            <div>
              <a className="footer-link" href={config.emailLink}>
                <span>{str.email}</span>
              </a>
            </div>
            <div>
              <a className="footer-link" href={config.facebookLink}>
                <span>Facebook</span>
              </a>
            </div>
            <div>
              <a className="footer-link" href={config.twitterLink}>
                <span>Twitter</span>
              </a>
            </div>
            <div>
              <a className="footer-link" href={config.instagramLink}>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-col" style={{flex: 3}}>
          <div>
            <h3>{str.other}</h3>
            <div>
              <a className="footer-link" href={config.privacyPolicyLink}>
                <span>{str.privacyPolicy}</span>
              </a>
            </div>
            <div>
              {/*<a className="footer-link" href={config.termsAndConditionsLink}>
                <span>Terms & Conditions</span>
              </a>*/}
            </div>
          </div>
        </div>
      </div>
    )
	}
}