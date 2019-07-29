import React, { Component } from 'react';
import * as api from '../api/index';
import List from './List';

class Commits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commits: [],
      error: null
    }
  }

  componentDidMount() {
    const {handle} = this.props.match.params 
    console.log(handle);
    api.getCommits(handle)
      .then(responses => {
        console.log(responses)
        this.setState({
          commits: responses.data
        });
      },
      (error) => {
        this.setState({
          error,
          commits: []
        });
      }
    )
  }

  render() {
    const { commits, error } = this.state
    if(error) {
      return <div>{error.message}</div>
    } else {
      return (
        <div className="">
         <List repos={!error ? commits : error} />
        </div>
      );
    }
  }
}

export default Commits;