import React, { Component } from "react"
import rockIcon from "./rock.svg"

export default class Rock extends Component {

  constructor(props) {
    super(props)
  }

  renderSvg() {
    return (
      <svg style={{ position: "absolute", ...this.props.style }} 
        width="64" height="64" 
        xmlns="http://www.w3.org/2000/svg">
       <g>
        <title>Layer 1</title>
        <path id="rock_svg" 
          fill={this.props.fillColor || "#373838"}
          stroke={this.props.outlineColor || "#27271d"}
          strokeWidth={this.props.outlineWidth || 1.5} 
          d="m0.873971,40.820619l6.193121,-28.206713l25.074321,-12.553185l25.074327,12.553185l6.193234,28.206713l-17.352468,22.620178l-27.830184,0l-17.35235,-22.620178z" 
        />
       </g>
      </svg>
    )
  }

  componentWillMount() {
    this.svg = this.renderSvg()
  }

  render() {
    return this.svg
  }
}