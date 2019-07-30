import React from 'react';

const Commit = ({commit}) => (
  <div className="row">
      <div className="col_item--2cols celula">{commit.commit.message}</div>
      <div className="col_item--4cols celula">{commit.sha.substr(0, 5)}</div>
      <div className="col_item--4cols celula">{commit.commit.committer.date}</div>
  </div>
)

export default Commit;