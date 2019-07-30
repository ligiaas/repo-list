import React from 'react';
import TableHeader from './TableHeader';
import Repo from './Repo';

const Repos = ({repos}) => (
  <div className="repoListContainer">
      <TableHeader />
      {
        repos.map(repo => (
          <Repo repo={repo} key={repo.id}/>
        ))
      }
  </div>
);

export default Repos;