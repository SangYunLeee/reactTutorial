import React, { Component } from 'react';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import Joke from './Joke';
import "./JokeList.css";

class JokeList extends Component {

   static defaultProps = {
      numJokeToGet: 10
   }
   constructor(props) {
      super(props);
      this.state = { jokes: [] }
   }

   async componentDidMount() {
      // Load Jokes
      let jokes = [];
      while (jokes.length < this.props.numJokeToGet) {
         let res = await axios.get("https://icanhazdadjoke.com/",
            { headers: { Accept: "application/json" } });
         jokes.push({ id: uuid() , text: res.data.joke, votes: 0 });
      }
      this.setState({ jokes });
   }

   handleVote(id, delta) {
      this.setState(
         st => ({
            jokes: st.jokes.map(j=>
               j.id === id? {...j, votes: j.votes + delta} : j
            )
         })
      )
   }

   render() {
      return (
         <div className='JokeList'>
            <div className='JokeList-sidebar'>
               <h1 className="JokeList-title">
                  <span>아재 </span>조크
               </h1>
               <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='some value'/>
               <button className="JokeList-getMore">New Jokes</button>
            </div>
            <div className='JokeList-jokes'>
               {this.state.jokes.map(j => (
                  <Joke key={j.id}
                        text={j.text}
                        votes={j.votes}
                        upVote={()=>this.handleVote(j.id, 1)}
                        downVote={()=>this.handleVote(j.id, -1)}
                  />
               ))}
            </div>
         </div>
      );
   }
}

export default JokeList;