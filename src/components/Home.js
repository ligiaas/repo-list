import React, { Component } from 'react';
// import State from '../state/index';
import * as api from '../api/index';
import Header from './Header';
import RepoList from './RepoList';
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
        <RepoList repos={!error ? repos : error} />
      </div>
    );
  }
}

export default Home;
