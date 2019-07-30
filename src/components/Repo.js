import React from 'react';

const Repo = ({repo}) => (
  <div className="row" >
    <div className="col_princ celula"><a href={`/${repo.name}/commits`}>{repo.name}</a></div>
    <div className="col_item celula">{repo.stargazers_count}</div>
    <div className="col_item celula">{repo.forks}</div>
    <div className="col_item celula">{repo.open_issues}</div>
  </div>
)

export default Repo;