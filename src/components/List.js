import React from 'react';
import Item from './Item';

const List = ({repos}) => (
  <div className="repoListContainer">
    {
      repos.map(repo => (
        <Item repo={repo} key={repo.id}/>
      ))
    }
  </div>
);

export default List;