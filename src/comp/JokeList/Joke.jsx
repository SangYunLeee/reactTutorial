import React, { Component } from 'react';
import "./Joke.css";

class Joke extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className="Joke">
				<div className="Joke-buttons">
					<i className="fas fa-arrow-up" onClick={this.props.upVote}></i>
					<span className="Joke-vote">{this.props.votes}</span>
					<i className="fas fa-arrow-down" onClick={this.props.downVote}></i>
				</div>
				<div className="Joke-text">
					{this.props.text}
				</div>
			</div>
		);
	}
}

export default Joke;