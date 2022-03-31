import React, { Component } from 'react'
import Die from './Die'

export default class DiceRoller extends Component {
	state = {
		first: 1,
		second: 2,
		DiceMap: new Map([
			[1, 'one'],
			[2, 'two'],
			[3, 'three']
		])
	}

	rolling = (e) => {
      console.log(this.state.first);
      this.setState({first:Math.floor(Math.random() * this.state.DiceMap.size) + 1});
	}

	render() {
		return (
			<div>
				<div>
					<Die face={`${this.state.DiceMap.get(this.state.first)}`} />
					<Die face={`${this.state.DiceMap.get(this.state.second)}`} />
				</div>
				<button onClick={this.rolling}>BUTTON</button>
			</div>
		)
	}
}
