import { module } from 'angular';
import * as React from 'react';
import './spinnakerHeader.less';
import { react2angular } from 'react2angular';

const Feedback = () => (
  <a href="https://stackoverflow.com/search?q=spinnaker" target="_blank">
    <button className="btn btn-info">Help</button>
  </a>
);

export const ACME_HEADER_FEEDBACK = 'spinnaker.acme.header.feedback';
const ngmodule = module(ACME_HEADER_FEEDBACK, []);
ngmodule.component('feedback', react2angular(Feedback));
