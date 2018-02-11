import React, { Component } from "react"
import "./AppStoreButton.css"

/*
  Props:
  ------
  animationTime - Int
  blackIcon - Image source
  whiteIcon - Image source
  storeName - String
  storeLink - String (URL)
*/

export default class AppStoreButton extends Component {

  constructor(props) {
    super(props)
    this.state = { currentIcon: this.props.whiteIcon }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter() {
    setTimeout(() => {
      this.setState({
        currentIcon: this.props.blackIcon
      })
    }, this.props.animationTime)
  }

  onMouseLeave() {
    setTimeout(() => {
      this.setState({
        currentIcon: this.props.whiteIcon
      })
    }, this.props.animationTime)
  }

  render() {
    const currentIcon = this.state.currentIcon

    return(
      <a className="app-store-btn"
        href={this.props.storeLink || "#"}
        onMouseEnter={this.onMouseEnter} 
        onMouseLeave={this.onMouseLeave} >
        <img src={currentIcon} style={styles.icon}/>
        <div style={styles.text}>
          <span>Get it on</span>
          <strong>{this.props.storeName}</strong>
        </div>
      </a>
    )
  }
}

const styles = {
  icon: {
    width: 40,
    height: 40,
    marginRight: 10, 
  },
  text: { 
    alignSelf: "center",
    display: "flex", 
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 9,
  }
}