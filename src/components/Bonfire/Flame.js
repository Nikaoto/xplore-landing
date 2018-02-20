import React, { Component } from "react"
import "./Flame.css"

export default class Flame extends Component {

  constructor(props) {
    super(props)
    this.state = { }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentDidMount() {
    this.setState({
      positionX: this.getRandomInt(this.props.minDisplacement || 0, this.props.maxDisplacement),
      delay: (this.props.delay / 1000).toString() + "s"
    })
/*
    setTimeout(() => this.setState({visible: true}), this.props.delay)
    console.log("Flame delay:", this.props.delay)*/
  }

  render() {
    const visible = this.state.visible
    const positionX = this.state.positionX
    const delay = this.state.delay

    return <div className="flame" style={{ animationDelay: delay, left: positionX, width: this.props.size, height: this.props.size }}/>
  }
}