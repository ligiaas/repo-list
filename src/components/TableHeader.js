import React from 'react';
import Octicon, {GitBranch, Star, IssueOpened, Repo} from '@primer/octicons-react';

const TableHeader = () => (
  <div className="row" >
    <div className="col_item--2cols celula"><Octicon icon={Repo} size='medium'/></div>
    <div className="col_item--3cols col_center celula"><Octicon icon={Star} size='medium'/></div>
    <div className="col_item--3cols col_center celula"><Octicon icon={GitBranch} size='medium'/></div>
    <div className="col_item--3cols col_center celula"><Octicon icon={IssueOpened} size='medium'/></div>
  </div>
)

export default TableHeader;