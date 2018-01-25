import React, {Component} from "react"
import "./LandingHeader.css"

export default class LandingHeader extends Component {
  constructor(props) {
    super(props)
    
    this.state = {}
    this.onLanguageChange = this.onLanguageChange.bind(this)
  }

  onLanguageChange(e) {
    const newLanguage = e.target.value
    console.log("New language:", newLanguage)

    this.props.onLanguageChange(newLanguage)
  }

  render() {
    const str = this.props.strings
    const logo = this.props.logo

    return (
      <div className="landing-header">
        <div className="header-logo-and-text">
          <img className="header-logo" src={logo} />
          <p className="header-text">{str.headerTitle}</p>
        </div>
        <div>
          <select className="language-select" onChange={this.onLanguageChange}>
            {this.props.languages.map(size => <option key={size}>{size}</option>)}
          </select>
        </div>
      </div>
    )
  }
}