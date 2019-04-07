import React, {Component} from 'react';

class AddIdea extends Component {

  state = {
    featureCount: 1,
    title: '',
    content: '',
    technology: '',
    feature0: ''
  };

  addFeatureInput =() => {

  };

  handleSubmit =(e) => {

  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  render() {

    return (
      <h1>Add Idea</h1>
    );
  }
}

export default AddIdea;