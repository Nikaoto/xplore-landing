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
        <div className="left-side">
          <div className="header-logo-parent">
            <img className="header-logo-image" src={logo} />
            <p className="header-logo-text">{str.headerTitle}</p>
          </div>
          {/*<div className="navbar" style={{backgroundColor: "red", width: 300, height: 50}}>
          </div>*/}
        </div>
        <div className="right-side">
          <div>
            <LanguageSelect onLanguageChange={this.onLanguageChange}/>
          </div>
        </div>
      </div>
    )
  }
}

// <div className="landing-header">
//   <div className="left-side">
//     <div className="header-logo-parent">
//       <img className="header-logo-image" src={logo} />
//       <p className="header-logo-text">{str.headerTitle}</p>
//     </div>
//     <div className="navbar" style={{backgroundColor: "red"}}>
//     </div>
//   </div>
//   <div className="right-side" style={{backgroundColor: "green"}}>
//     <div>
//       <LanguageSelect onLanguageChange={this.onLanguageChange}/>
//     </div>
//   </div>
// </div>