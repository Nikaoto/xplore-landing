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

  componentDidMount() {
    const positionX = this.getRandomInt(this.props.minDisplacement || 0, this.props.maxDisplacement)

    this.setState({
      style: {
        width: this.props.size,
        height: this.props.size,
        left: positionX,
        animationDelay: (this.props.delay/1000).toString() + "s"
      }
    })
  }

  render() {
    const style = this.state.style

    return <div className="flame" style={style}/>
  }
}