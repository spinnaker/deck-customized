import { module } from 'angular';

import { ACME_HEADER } from './header/header.module';
import { ACME_REPOS } from './datasource/repos/repos.module';
import { ACME_CLOUDPROVIDER } from './cloudprovider/cloudprovider.module';
import { ACME_HELP_OVERRIDES } from './help/help.overrides';
import { EXCEPTION_HANDLER } from './exceptionHandler.delegate';

// load all templates into the $templateCache
const templates = require.context('./', true, /\.html$/);
templates.keys().forEach(function (key) {
  templates(key);
});

export const ACME_MODULE = 'spinnaker.acme';
module(ACME_MODULE, [
  ACME_HEADER,
  ACME_REPOS,
  ACME_CLOUDPROVIDER,
  ACME_HELP_OVERRIDES,
  EXCEPTION_HANDLER,
]);
