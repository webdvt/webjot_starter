import React, {Component} from 'react';
import moment from 'moment';

class Idea extends Component {

  onDelete = () => {
    this.props.deleteIdea(this.props.idea.id)
  };

  render() {
    const {idea} = this.props;
    return (
      <div className="card mb-5">
        <div className="card-header p-4">
          <h3 className="">{idea.title}</h3>
          <span  className=""> Posted {moment(idea.date.toString()).calendar()}</span>
        </div>
        <div className="card-body p-4">
          <p className="card-text lead">{idea.content}</p>
          <h5 className="mb-3">Features</h5>
          <ul className="list-group list-group-flush">
            {idea.features.map(feature => {
              return <li key={feature} className="list-group-item">{feature}</li>
            })}
          </ul>
          <br/>
          <h5 className="mb-3">Technologies</h5>
          <span className="lead">{idea.technologies}</span>
        </div>
        <div className="card-footer p-4">
          <a href={'/ideas/edit/' + idea.id} className="btn btn-outline-dark btn-block mb-2">Edit</a>
          <button onClick={this.onDelete} className="btn btn-outline-danger btn-block">Delete</button>
        </div>
      </div>
    );
  }
}

export default Idea;