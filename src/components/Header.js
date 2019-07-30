import React from 'react';
import '../assets/App.css';
import Octicon, {MarkGithub} from '@primer/octicons-react'

const Header = () => (
  <header>
    <a href="/" id="header">
      <span><Octicon icon={MarkGithub} size='large'/></span>
      <h1 className="title">Ligiaas Repositories List</h1>
    </a>
  </header>
)

export default Header;