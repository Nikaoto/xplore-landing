import React, { Component } from "react"
import "./Smoke.css"

export default class Smoke extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentWillMount() {
    this.setState({
      positionX: this.getRandomInt(this.props.minDisplacement || 0, this.props.maxDisplacement)
    })

    setTimeout(() => this.setState({visible: true}), this.props.delay)
  }

  render() {
    if (this.state.visible == true) {
      return(
        <div className="smoke" 
          style={{ left: this.state.positionX, width: this.props.size, height: this.props.size }}/>
      )
    } else {
      return <div/>
    }
  }
}