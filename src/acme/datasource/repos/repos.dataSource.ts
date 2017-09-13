import { IHttpService, IQService, module } from 'angular';
import {
  Application, APPLICATION_DATA_SOURCE_REGISTRY, ApplicationDataSourceRegistry, DataSourceConfig
} from '@spinnaker/core';

export const ACME_REPOS_DATASOURCE = 'spinnaker.acme.datasoure.custom';
const ngmodule = module(ACME_REPOS_DATASOURCE, [APPLICATION_DATA_SOURCE_REGISTRY]);
ngmodule.run((
  $q: IQService,
  $http: IHttpService,
  applicationDataSourceRegistry: ApplicationDataSourceRegistry
) => {
  'ngInject';

  const loadRepos = () =>
    $http.get('https://api.github.com/users/spinnaker/repos')
      .then(resp => resp.data)
      .catch(() => [
        { name: 'foo'},
        { name: 'bar'},
      ]);

  const reposLoaded = (_application: Application, repositories: any[]) => {
    return $q.when(repositories);
  };

  applicationDataSourceRegistry.registerDataSource(new DataSourceConfig({
    optional: true,
    primary: true,
    loader: loadRepos,
    onLoad: reposLoaded,
    description: 'A custom data source fetching Spinnaker repos as out-of-band data',
    key: 'repos',
    sref: '.repos',
    title: 'Spinnaker Repos',
    label: 'Spinnaker Repos',
    icon: 'bar-chart'
  }));
});
