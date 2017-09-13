import { module } from 'angular';
import { ACME_REPOS_STATES } from './repos.states';
import { ACME_REPOS_DATASOURCE } from './repos.dataSource';

export const ACME_REPOS = 'spinnaker.acme.datasource';
module(ACME_REPOS, [
  ACME_REPOS_STATES,
  ACME_REPOS_DATASOURCE,
]);
