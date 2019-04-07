import React, {Component} from 'react';
import Idea from "./Idea";

class Ideas extends Component {
  render() {
    return (
      <div>
        {this.props.ideas.map(idea => {
          return <Idea key={idea.id} idea={idea} deleteIdea={this.props.deleteIdea}/>
        })}
      </div>
    );
  }
}

export default Ideas;