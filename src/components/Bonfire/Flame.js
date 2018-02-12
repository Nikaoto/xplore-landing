import React, { Component } from "react"
import "./Flame.css"

export default class Flame extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentWillMount() {
    this.setState({
      positionX: this.getRandomInt(40, 100)
    })

    setTimeout(() => this.setState({visible: true}), this.props.delay)
  }

  render() {
    if (this.state.visible == true) {
      return <div className="flame" style={{ left: this.state.positionX }}/>
    } else {
      return <div/>
    }
  }
}