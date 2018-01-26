import React, {Component} from "react"
import LanguageSelect from "../LanguageSelect"
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
      <div className="landing-header">
        <div className="header-logo-container">
          <img className="header-logo" src={logo} />
          <p className="header-logo-text">{str.headerTitle}</p>
        </div>
        <div>
          <LanguageSelect onLanguageChange={this.onLanguageChange}/>
        </div>
      </div>
    )
  }
}