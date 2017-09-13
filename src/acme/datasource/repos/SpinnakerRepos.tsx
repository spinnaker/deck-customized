import * as React from 'react';
import autoBindMethods from 'class-autobind-decorator';
import { UISref, UISrefActive, UIView } from '@uirouter/react';
import { Application, ApplicationDataSource } from '@spinnaker/core';

interface ISpinnakerReposProps {
  app: Application;
}

interface ISpinnakerReposState {
  repos: any[];
}

@autoBindMethods
export class SpinnakerRepos extends React.Component<ISpinnakerReposProps, ISpinnakerReposState> {
  private dataSource: ApplicationDataSource;
  private unsubscribe: Function;

  constructor(props: ISpinnakerReposProps) {
    super(props);
    this.dataSource = this.props.app.getDataSource('repos');
    this.state = {
      repos: this.dataSource.data,
    }
  }

  public reposChanged() {
    this.setState({ repos: this.dataSource.data });
  }

  public componentDidMount() {
    this.unsubscribe = this.dataSource.onRefresh(null, () => this.reposChanged());
  }

  public componentWillUnmount() {
    this.unsubscribe();
  }

  private renderReposList(repos: any[]) {
    return (
      <ul>
        {repos.map(repo => (
          <UISrefActive class="active" key={repo.name}>
            <li>
              <UISref to=".repo" params={{ reponame: repo.name }}><a>{repo.name}</a></UISref>
            </li>
          </UISrefActive>
        ))}
      </ul>
    )
  }

  public render() {
    const { repos } = this.state;

    return (
      <div>
        <h3>Spinnaker Repos</h3>

        <div className="flex-container-h">
          {repos ? this.renderReposList(repos) : <h3>Loading...</h3>}
          <div className="flex-grow">
            <UIView/>
          </div>
        </div>
      </div>
    );
  }
}
