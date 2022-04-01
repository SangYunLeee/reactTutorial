import React, { Component } from 'react';
import axios from 'axios';
import "./JokeList.css";

class JokeList extends Component {

    static defaultProps = {
        numJokeToGet : 10
    }
    constructor(props) {
        super(props);
        this.state = { jokes: [] }
    }

    async componentDidMount() {
        // Load Jokes
        let jokes = [];
        while (jokes.length < this.props.numJokeToGet) {
            let joke = await axios.get("https://icanhazdadjoke.com/",
                { headers: {Accept: "application/json"} });
            jokes.push(joke.data.joke);
        }
        this.setState({jokes});
    }

    render() {
        return (
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className="JokeList-title">
                        <span>아재</span> 조크
                    </h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                    <button className="JokeList-getMore">New Jokes</button>
                </div>
                <h1>아재 조크</h1>
                {this.state.jokes.map(j => (
                    <div> {j} </div>
                )) }
            </div>
         );
    }
}

export default JokeList;