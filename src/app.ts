import { module } from 'angular';

import { CORE_MODULE } from '@spinnaker/core';
import { AMAZON_MODULE } from '@spinnaker/amazon';
import { GOOGLE_MODULE } from '@spinnaker/google';
import { ACME_MODULE } from './acme/acme.module';

module('acme.spinnaker', [
  CORE_MODULE,
  AMAZON_MODULE,
  GOOGLE_MODULE,
  ACME_MODULE,
]);
