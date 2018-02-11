import React, { Component } from "react"
import "./AppleStoreButton.css"
import appleIcon from "./apple.svg"

export default class AppleStoreButton extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <a className="apple-store-btn" href="#">
        <img src={appleIcon}/>
        <span>Get it on</span>
        <span>The App Store</span>
      </a>
    )
  }
}