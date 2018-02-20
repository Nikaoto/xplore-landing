import React, { Component } from "react"
import "./Flame.css"

export default class Flame extends Component {

  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentDidMount() {
    this.setState({
      positionX: this.getRandomInt(this.props.minDisplacement || 0, this.props.maxDisplacement)
    })

    setTimeout(() => this.setState({visible: true}), this.props.delay)
    console.log("Flame delay:", this.props.delay)
  }

  render() {
    const visible = this.state.visible
    const positionX = this.state.positionX

    if (visible === true) {
      return <div className="flame" style={{ left: positionX, width: this.props.size, height: this.props.size }}/>
    } else {
      return <div/>
    }
  }
}