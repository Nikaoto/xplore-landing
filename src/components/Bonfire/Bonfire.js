import React, { Component } from "react"
import Flame from "./Flame"
import Smoke from "./Smoke"
import "./Bonfire.css"

const flameSize = 100
const flameCount = 15
const smokeSize = 100
const smokeCount = 10

// Particle displacement (SUM MUST BE FLAMESIZE)
const maxFlameX = 100
const minFlameX = 0
const maxSmokeX = 130
const minSmokeX = -30

// Flame spawn delay
const minDelay = 0
const maxDelay = 1700

export default class Bonfire extends Component {

  constructor(props) {
    super(props)
    this.state = { flames: []}
  }

  lerp(fr, to, road) {
    return fr + (to - fr) * road
  }

  generateFlames() {
    let flames = []
    for (let i = 0; i < flameCount; i++) {
      flames.push(
        <Flame key={i} 
          delay={this.lerp(minDelay, maxDelay, i/flameCount)} 
          size={flameSize}
          minDisplacement={minFlameX} maxDisplacement={maxFlameX}/>
      )
    }
    this.flames = flames
  }

  generateSmoke() {
    let smoke = []
    for (let i = 0; i < smokeCount; i++) {
      smoke.push(
        <Smoke key={i} 
          delay={this.lerp(minDelay, maxDelay, i/smokeCount)} 
          size={smokeSize}
          minDisplacement={minSmokeX} maxDisplacement={maxSmokeX}/>
      )
    }
    this.smoke = smoke 
  }

  componentWillMount() {
    this.generateSmoke()
    this.generateFlames()
  }

  render() {
    return(
      <div style={styles.container}>
        {this.smoke}
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