import React from 'react';
import Repo from './Repo';

const Repos = ({repos}) => (
  <div className="repoListContainer">
    {
      repos.map(repo => (
        <Repo repo={repo} key={repo.id}/>
      ))
    }
  </div>
);

export default Repos;