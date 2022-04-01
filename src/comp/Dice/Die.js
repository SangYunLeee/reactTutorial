import React, { Component } from 'react'
import './Die.css'

export default class Die extends Component {
  render() {
    return (
			<span className='Die'>
				<i className={`Die-item fas fa-dice-${this.props.face}`}> </i>
			</span>
    )
  }
}
