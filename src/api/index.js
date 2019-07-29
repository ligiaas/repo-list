import axios from 'axios';
import { Promise } from 'q';

const user = 'ligiaas';
const rootApi = `https://api.github.com`;

export function getRepos() {
  const repos = axios.get(`${rootApi}/users/${user}/repos`);

  return Promise.resolve(repos);
}

export function getCommits(value) {
  let query = value;
  const commits = axios.get(`${rootApi}/repos/${user}/${query}/commits`);

  return Promise.resolve(commits);
}