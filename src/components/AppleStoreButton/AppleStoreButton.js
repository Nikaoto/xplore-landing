import React, { Component } from "react"
import "./AppleStoreButton.css"
import androidIcon from "./android.svg"

export default class AppleStoreButton extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <a className="apple-store-btn" href="#">
        <img src={androidIcon}/>
        <span>Get it on</span>
        <span>Google Play</span>
      </a>
    )
  }
}