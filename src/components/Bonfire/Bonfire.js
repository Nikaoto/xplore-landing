import React, { Component } from "react"
import Flame from "./Flame"
import Smoke from "./Smoke"
import Rock from "../Rock"
import "./Bonfire.css"

const flameSize = 100
const flameCount = 15
const smokeSize = 100
const smokeCount = 6

// Particle displacement
const maxFlameX = 70
const minFlameX = 15
const maxSmokeX = 130
const minSmokeX = -40

// Flame spawn delay
const flameDelay = 150
const smokeDelay = 330

export default class Bonfire extends Component {

  constructor(props) {
    super(props)
    this.state = { }

  }

  generateFlames() {
    let flames = []
    for (let i = 1; i <= flameCount; i++) {
      flames.push(
        <Flame key={i} 
          delay={flameDelay * i} 
          size={flameSize}
          minDisplacement={minFlameX} maxDisplacement={maxFlameX}/>
      )
    }
    this.setState({ flames: flames })
  }

  generateSmoke() {
    let smoke = []
    for (let i = 1; i <= smokeCount; i++) {
      smoke.push(
        <Smoke key={i} 
          delay={smokeDelay * i} 
          size={smokeSize}
          minDisplacement={minSmokeX} maxDisplacement={maxSmokeX}/>
      )
    }
    this.setState({ smoke: smoke })
  }

  renderRocks() {
    return(
      <div style={{position: "absolute", top: 58, left: 60}}>
        <Rock fillColor="#272727" style={{zIndex: 1, left: 80}}/>
        <Rock fillColor="#212121" style={{zIndex: 2, left: 40, top: 10}}/>
        <Rock fillColor="#1a1a1a" style={{zIndex: 3, top: 20}}/>
        <Rock fillColor="#212121" style={{zIndex: 2, left: -40, top: 10}}/>
        <Rock fillColor="#272727" style={{zIndex: 1, left: -80}}/>
      </div>
    )
  }

  componentDidMount() {
    this.generateFlames()
    this.generateSmoke()
  }

  render() {
    const flames = this.state.flames
    const smoke = this.state.smoke

    return(
      <div style={styles.container}>
        <div style={styles.core} />
        {smoke}
        {flames}
        {this.renderRocks()}
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
    marginBottom: 200,
  },
  core: {
    width: 150,
    height: 30,
    left: 15,
    top: 63,
    position: "absolute",
    background: "#cc9900",
  }
}