import { module } from 'angular';
import { CloudProviderRegistry } from '@spinnaker/core';

export const ACME_CLOUDPROVIDER = 'spinnaker.acme.cloudprovider';
const ngmodule = module(ACME_CLOUDPROVIDER, [ ]);

ngmodule.run(function(cloudProviderRegistry: CloudProviderRegistry)  {
  'ngInject';
  cloudProviderRegistry.overrideValue('aws', 'instance.detailsTemplateUrl', require('./instance.detailsTemplate.html'));
  cloudProviderRegistry.overrideValue('aws', 'serverGroup.detailsTemplateUrl', require('./serverGroup.detailsTemplate.html'));
});
