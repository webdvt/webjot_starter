import React, {Component} from 'react';
import Idea from "./Idea";

class Ideas extends Component {
  render() {
    return (
      <div>
        <h1>Ideas: </h1>
         <Idea/>
         <Idea/>
         <Idea/>
      </div>
    );
  }
}

export default Ideas;