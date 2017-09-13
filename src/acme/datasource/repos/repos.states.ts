import { module } from 'angular';

import { INestedState, APPLICATION_STATE_PROVIDER, ApplicationStateProvider } from '@spinnaker/core';
import { SpinnakerRepos } from './SpinnakerRepos';
import { Repo } from './Repo';

export const ACME_REPOS_STATES = 'spinnaker.acme.canary.states';
module(ACME_REPOS_STATES, [APPLICATION_STATE_PROVIDER])
  .config((applicationStateProvider: ApplicationStateProvider) => {
  const repoState: INestedState = {
    name: 'repo',
    url: '/:reponame',
    component: Repo,
  };

  const reposState: INestedState = {
    name: 'repos',
    url: '/repos',
    views: {
      insight: {
        component: SpinnakerRepos, $type: 'react',
      },
    },
    data: {
      pageTitleSection: {
        title: 'Spinnaker Projects'
      }
    },
    children: [repoState]
  };

  applicationStateProvider.addChildState(reposState);
});
