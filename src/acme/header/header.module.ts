import { module } from 'angular';
import { OverrideRegistry } from '@spinnaker/core';
import { ACME_HEADER_FEEDBACK } from 'acme/header/Feedback';
import './spinnakerHeader.less';

export const ACME_HEADER = 'spinnaker.acme.header';
const ngmodule = module(ACME_HEADER, [
  ACME_HEADER_FEEDBACK,
]);

ngmodule.run(function(overrideRegistry: OverrideRegistry)  {
  'ngInject';
  overrideRegistry.overrideTemplate('spinnakerHeader', require('./spinnakerHeader.html'));
});
