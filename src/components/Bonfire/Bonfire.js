import React, { Component } from "react"
import Flame from "./Flame"
import "./Bonfire.css"

export default class Bonfire extends Component {

  constructor(props) {
    super(props)
    this.state = { flames: []}
  }

  lerp(fr, to, road) {
    return fr + (to - fr) * road
  }

  componentWillMount() {
    const count = 10
    const minDelay = 0
    const maxDelay = 1800
    let flames = []
    for (let i = 0; i < count; i++) {
      flames.push(<Flame key={i} delay={this.lerp(minDelay, maxDelay, i/count)} />)
    }
    this.flames = flames
  }

  render() {
    return(
      <div className="col-md-4" style={styles.container}>
        {this.flames}
      </div>
    )
  }
}

const styles = {
  container: {
    display: "flex",
    alignSelf: "center",
    marginTop: 200,
    marginBottom: 100,
  }
}