import React, { Component } from "react"
import blank from "./blank.gif"
import "./flags.css"
import "./LanguageSelect.css"

const languageNames = {
  en: "English, US",
  ka: "ქართული",
  ru: "Русский",
}

export default class LanguageSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {buttonTextColor: "#b1b7bf", showList: false};
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  changeLanguage(languageCode) {
    this.props.onLanguageChange(languageCode)
    this.setState({showList: false})
  }

  lightenImage() {
    this.setState({buttonTextColor: "white"})    
  }

  darkenImage() {
    this.setState({buttonTextColor: "#b1b7bf"})
  }

  onMouseEnter(e) {
    this.lightenImage()
    this.setState({showList: true})
  }

  onMouseLeave(e) {
    this.darkenImage()
    this.setState({showList: false})
  }

  renderList() {
    if (this.state.showList === true) {
      return (
        <ul id="languageList" className="dropdown-content">
          <li className="dropdown-option" onClick={() => this.changeLanguage("en")}>
            <img src={blank} className="flag flag-us" alt="EN_US"/>
            {languageNames.en}
          </li>
          <li className="dropdown-option" onClick={() => this.changeLanguage("ka")}>
            <img src={blank} className="flag flag-ge" alt="KA_GE"/>
            {languageNames.ka}
          </li>
          <li className="dropdown-option" onClick={() => this.changeLanguage("ru")}>
            <img src={blank} className="flag flag-ru" alt="RU"/>
            {languageNames.ru}
          </li>
        </ul>
      )
    }
  }

  render() {
    const buttonTextColor = this.state.buttonTextColor

    return(
      <div className="dropdown" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <button className="dropdown-button">
          <div style={{color: buttonTextColor, marginTop: -8}}>
            <div style={{fontSize: 25, marginLeft: -9, marginBottom: -25}}>ა</div>
            <div style={{fontSize: 20, marginLeft: 12}}>A</div>
          </div>
        </button>
        {this.renderList()}
      </div>
    )
  }
}