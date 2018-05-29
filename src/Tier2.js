import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }

  updateChildColor = (event) => {
     event.stopPropagation();
     this.setState({
       childColor: getRandomColor()
     })
  }

  render() {
    return (
      <div onClick={(event => this.props.handleChildClick(event))} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleChildClick={this.updateChildColor} color={this.state.childColor} />
        <Tier3 handleChildClick={this.updateChildColor} color={this.state.childColor} />
      </div>
    )
  }
}
