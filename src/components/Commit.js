import React from 'react';

const Commit = ({commit}) => (
  <div className="row">
      <div className="col_item--2cols celula">{commit.commit.message}</div>
      <div className="col_item--6cols celula">{commit.sha.substr(0, 10)}</div>
  </div>
)

export default Commit;