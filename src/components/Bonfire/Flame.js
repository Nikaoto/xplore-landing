import React, { Component } from "react"

export default class Flame extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      position: this.props.position || 0,
      rotation: this.props.rotation || 0,
      opacity: 1,
      animationTime: this.props.animationTime || 3000,
    }
  }

  render() {
    return(
      <div style={{ ...styles.flame, ...{ borderRadius: 3 }}}
      />
    )
  }
}

const styles = {
  flame: {
    position: "absolute",
    width: "15px",
    height: "15px",
    background: "red",
  },
}