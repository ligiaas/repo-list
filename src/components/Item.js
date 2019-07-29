import React from 'react';

const Item = ({repo}) => (
  <a
    className="repoItemContainer"
    href={`/${repo.name}/commits`}
  >
    <span>{repo.name}</span>
    <span>{repo.stargazers_count}</span>
    <span>{repo.forks}</span>
    <span>{repo.open_issues}</span>
  </a>
)

export default Item;