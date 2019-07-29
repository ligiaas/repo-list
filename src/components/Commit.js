import React from 'react';

const Commit = ({commit}) => (
  <tr>
      <td>{commit.sha}</td>
      <td>{commit.commit.commiter}</td>
      <td>{commit.commit.message}</td>
  </tr>
)

export default Commit;