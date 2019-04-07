import React, {Component} from 'react';
class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state, this.props.history);
  };

  render() {
    return (
      <h1>Register</h1>
    );
  }
}

export default Register;