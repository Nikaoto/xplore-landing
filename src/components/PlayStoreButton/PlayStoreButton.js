import React, { Component } from "react"
import "./PlayStoreButton.css"
import lightIcon from "./android.png"
import darkIcon from "./android_dark.png"

const animationTime = 100

export default class PlayStoreButton extends Component {

  constructor(props) {
    super(props)
    this.state = { androidIcon: lightIcon }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter() {
    setTimeout(() => {
      this.setState({
        androidIcon: darkIcon
      })
    }, animationTime)
  }

  onMouseLeave() {
    setTimeout(() => {
      this.setState({
        androidIcon: lightIcon
      })
    }, animationTime)
  }

  render() {
    const androidIcon = this.state.androidIcon
    return(
      <a className="play-store-btn" 
        href="#" 
        onMouseEnter={this.onMouseEnter} 
        onMouseLeave={this.onMouseLeave} >
        <img src={androidIcon} style={styles.icon}/>
        <div style={styles.text}>
          <span>Get it on</span>
          <strong>Google Play</strong>
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
    display: "flex", 
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 8,
  }
}