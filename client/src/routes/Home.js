import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: ''
    };
  }

  componentWillMount() {
    this.callApi();
  }

  callApi = async () => {
    let { data } = await axios.get('/api');
    this.setState({ response: data.message });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Super Procrastinator</h1>
        <h2>Login or Register to get started!</h2>
        <h1>{this.state.response}</h1>
      </div>
    );
  }
}

export default Home;
