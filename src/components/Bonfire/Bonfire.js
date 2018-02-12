import React, { Component } from "react"
import Flame from "./Flame"
import "./Bonfire.css"

const flameSize = 100

// Flame displacement (SUM MUST BE FLAMESIZE)
const maxX = 100
const minX = 0

// Flame spawn delay
const minDelay = 0
const maxDelay = 1800

// Flame count
const count = 15

export default class Bonfire extends Component {

  constructor(props) {
    super(props)
    this.state = { flames: []}
  }

  lerp(fr, to, road) {
    return fr + (to - fr) * road
  }

  componentWillMount() {
    let flames = []
    for (let i = 0; i < count; i++) {
      flames.push(
        <Flame key={i} 
          delay={this.lerp(minDelay, maxDelay, i/count)} 
          size={flameSize}
          minDisplacement={minX} maxDisplacement={maxX}/>
      )
    }
    this.flames = flames
  }

  render() {
    return(
      <div style={styles.container}>
        {this.flames}
      </div>
    )
  }
}

const styles = {
  container: {
    position: "relative",
    alignSelf: "center",
    left: -flameSize,
    marginTop: 200,
    marginBottom: 100,
  }
}