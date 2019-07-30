import React from 'react';

const Repo = ({repo}) => (
  <div className="row" >
    <div className="col_item--2cols celula"><a href={`/${repo.name}/commits`}>{repo.name}</a></div>
    <div className="col_item--3cols col_center celula">{repo.stargazers_count}</div>
    <div className="col_item--3cols col_center celula">{repo.forks}</div>
    <div className="col_item--3cols col_center celula">{repo.open_issues}</div>
  </div>
)

export default Repo;