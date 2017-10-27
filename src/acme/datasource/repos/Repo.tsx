import * as React from 'react';
import { IHttpService } from 'angular';
import { BindAll } from 'lodash-decorators';
import { Application } from '@spinnaker/core';
import { Transition } from '@uirouter/core';

interface IRepoProps {
  app: Application;
  transition: Transition;
  repo: any;
}

interface IRepoState {
  repodata: any;
}

@BindAll()
export class Repo extends React.Component<IRepoProps, IRepoState> {
  private $http: IHttpService;

  constructor(props: IRepoProps) {
    super(props);
    this.$http = props.transition.injector().get('$http');
    this.fetchRepoData(props);
    this.state = { repodata: null };
  }

  public componentWillReceiveProps(nextprops: IRepoProps) {
    this.setState({ repodata: null });
    this.fetchRepoData(nextprops);
  }

  private fetchRepoData(props: IRepoProps) {
    const trans: Transition = props.transition;
    const reponame = trans.params().reponame;

    this.$http.get(`https://api.github.com/repos/spinnaker/${reponame}`)
      .then(resp => resp.data)
      .catch(() => ({
        name: 'rate limit exceeded?',
      }))
      .then((repodata: any) => this.setState({ repodata: repodata }));
  }

  public render() {
    const { repodata } = this.state;

    if (!repodata) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div style={{ marginLeft: '2em' }}>
        <b>Repo: {repodata.name}</b>

        <pre>
          {JSON.stringify(repodata, null, 2)}
        </pre>
      </div>
    );
  }
}
