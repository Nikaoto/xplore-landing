import React, { Component } from "react"
import Flame from "./Flame"
import "./Bonfire.css"

export default class Bonfire extends Component {

  constructor(props) {
    super(props)
    this.state = { flames: []}
  }

  renderFlames() {
    //const rand = min + Math.random() * (max - min);
    const rand = Math.random() * 10
    let flames = []
    for (let i = 0; i < rand; i++) {
      flames.push(<Flame/>)
    }
    return flames
  }

  render() {
    return(
      <div style={styles.container}>
        {this.renderFlames()}
        <span>BONFIRE</span>
      </div>
    )
  }
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 100,
  },
  floatUp1: {
    animationName: "float-up",
  },
  floatUp2: {
    animationName: "float-up",
    animationDelay: "0.8s",
  },
  floatRight: {
    animationName: "float-up-right",
  },
  floatLeft1: {
    animationName: "float-up-left",
  },
  floatLeft2: {
    animationName: "float-up-left",
    animationDelay: "0.5s",
  },
}