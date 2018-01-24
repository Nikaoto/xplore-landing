import React, {Component} from "react"
import strings from "../../values/strings"
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
    const language = this.props.language
    const str = strings(language)
    const logo = this.props.logo

    return (
      <div className="landing-header">
        <div>
          <h1>{str.header}</h1>
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