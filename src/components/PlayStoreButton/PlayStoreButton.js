import React, { Component } from "react"
import "./PlayStoreButton.css"
import androidIcon from "./android.svg"

export default class PlayStoreButton extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <a className="play-store-btn" href="#">
        <img src={androidIcon}/>
        <span>Get it on</span>
        <span>Google Play</span>
      </a>
    )
  }
}