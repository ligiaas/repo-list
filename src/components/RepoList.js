import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({repos}) => (
  <div className="repoListContainer">
    {
      repos.map(repo => (
        <RepoItem repo={repo} key={repo.id}/>
      ))
    }
  </div>
);

export default RepoList;