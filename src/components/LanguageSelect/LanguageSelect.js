import React, { Component } from "react"
import blank from "./blank.gif"
import "./flags.css"
import "./LanguageSelect.css"

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
            English, US
          </li>
          <li className="dropdown-option" onClick={() => this.changeLanguage("ka")}>
            <img src={blank} className="flag flag-ge" alt="KA_GE"/>
            ქართული
          </li>
          <li className="dropdown-option" onClick={() => this.changeLanguage("ru")}>
            <img src={blank} className="flag flag-ru" alt="RU"/>
            Ruski
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
          <div style={{color: buttonTextColor}}>
            <div style={{fontSize: "30px", marginLeft: "-12px", marginBottom: "-20px"}}>ა</div>
            <div style={{marginLeft: "12px"}}>A</div>
          </div>
        </button>
        {this.renderList()}
      </div>
    )
  }
}
