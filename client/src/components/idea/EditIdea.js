import React, {Component} from 'react';

class EditIdea extends Component {

  state = {
    featureCount: 0,
    title: '',
    content: '',
    technologies: '',
    date: Date.now(),
    features: []
  };

  addFeature = () => {
    this.setState({featureCount: this.state.featureCount + 1});
    let featureName = `feature${this.state.featureCount}`;
    this.setState({[featureName]: ''})
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  componentDidMount() {
    this.props.ideas.forEach(idea => {
      if(idea.id === Number(this.props.id)) {
        this.setState({
          title: idea.title,
          content: idea.content,
          technologies: idea.technologies,
          features: [...idea.features],
          featureCount: idea.features.length
        });

      }
    });
  }

  render() {
    const features = [];
    for(let i = 0; i < this.state.featureCount; i++) {
      features.push(<input onChange={this.handleChange} value={this.state.features[i]} key={i} type="text" className="form-control m-2" name={`feature${i}`} placeholder="Add a new feature..." required>
      </input>)
    }

    return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <div className="card-header">
            <h3>Edit Project Idea</h3>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Title</label>
              <input value={this.state.title} onChange={this.handleChange} type="text" className="form-control" name="title"  placeholder="Title..." required>
              </input>
            </div>
            <div className="form-group">
              <label>Details</label>
              <textarea value={this.state.content} onChange={this.handleChange} className="form-control" name="content"  placeholder="This project does..." required>
            </textarea>
            </div>
            <div className="form-group">
              <label>Technologies</label>
              <input value={this.state.technologies} onChange={this.handleChange} type="text" className="form-control" name="technologies" placeholder="Nodejs, React, Express etc." required>
              </input>
            </div>
            <div className="form-group" id="features">
              <label>Features</label>
              {features}
            </div>
            <button onClick={this.addFeature} className="btn btn-outline-secondary">More</button>
          </div>
          <div className="card-footer text-center">
            <button type="submit" className="btn btn-outline-primary ">Edit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditIdea;