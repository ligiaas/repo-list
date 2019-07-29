import React, { Component } from 'react';
import * as api from '../api/index';
import Header from './Header';
import List from './List';
import '../assets/App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      commits: [],
      error: null
    }
  }
  
  componentDidMount() {
    api.getRepos()
      .then(responses => {
        this.setState({
          repos: responses.data
        });
      },
      (error) => {
        this.setState({
          error,
          repos: []
        });
      }
    )
  }

  render() {
    const { repos, error } = this.state;
    return (
      <div className="App">
        <Header />
        <List repos={!error ? repos : error} />
      </div>
    );
  }
}

export default Home;
