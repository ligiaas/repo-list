import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import RepoItem from './components/RepoItem';
import Commits from './components/Commits';
import './assets/App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/repo" component={ RepoItem } />
        <Route exact path="/:handle/commits" component={ Commits } />
      </div>
    </Router>
  );
}

export default App;
