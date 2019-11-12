import React, {Component} from "react"
import LanguageSelect from "../LanguageSelect"
import twitter from "./img/twitter.svg"
import facebook from "./img/facebook.svg"
import instagram from "./img/instagram.svg"
import config from "../../values/config"
import "./LandingHeader.css"

export default class LandingHeader extends Component {
  constructor(props) {
    super(props)
    
    this.state = {}
    this.onLanguageChange = this.onLanguageChange.bind(this)
  }

  onLanguageChange(newLanguage) {
    console.log("New language:", newLanguage)

    this.props.onLanguageChange(newLanguage)
  }

  render() {
    const str = this.props.strings
    const logo = this.props.logo

    return (
      <div className="header container">
        <div className="left-side">
          <div className="header-logo-parent">
            <img className="header-logo-image" src={logo} />
            <p className="header-logo-text">{str.headerTitle}</p>
          </div>
        </div>
        <div className="right-side">

            <div className="social-buttons">
              <a href={config.twitterLink} rel="me">
                <img src={twitter} height={socialButtonSize} width={socialButtonSize} alt={"xplore twitter"}/>
              </a>
              <a href={config.facebookLink} rel="me">
                <img src={facebook} height={socialButtonSize} width={socialButtonSize} alt={"xplore twitter"}/>
              </a>
              <a href={config.instagramLink} rel="me">
                <img src={instagram} height={socialButtonSize} width={socialButtonSize} alt={"xplore twitter"}/>
              </a>
            </div>

            <div>
              {/*Separator*/}
            </div>

            <LanguageSelect onLanguageChange={this.onLanguageChange}/>
        </div>
      </div>
    )
  }
}

const socialButtonSize = 20