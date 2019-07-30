import React, { Component } from 'react';
import * as api from '../api/index';
import Header from './Header';
import Commit from './Commit';

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
      return (
        <div>
          <Header/>
          <div>{error.message}</div>
        </div>
      )
    } else {
      return (
        <div>
          <Header/>
          <div className="repoListContainer">
          <div className="row" >
            <div className="col_item--2cols celula"><h2>Mensagem</h2></div>
            <div className="col_item--6cols celula"><h2>Sha</h2></div>
          </div>
            {
              commits.map((commit, index) => (
                <Commit commit={commit} key={index}/>
              ))
            }
          </div>
        </div>
      );
    }
  }
}

export default Commits;