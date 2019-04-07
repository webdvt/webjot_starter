import React, {Component} from 'react';

class Login extends Component {
   state = {
      email: '',
      password: ''
   };

   handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
   };

   handleSubmit = (e) => {
      e.preventDefault();
      this.props.loginUser(this.state);
   };

  render() {
    return (
      <h1>Login</h1>
    );
  }
}

export default Login;