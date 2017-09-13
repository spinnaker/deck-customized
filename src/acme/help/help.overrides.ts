import { module } from 'angular';

import { HELP_CONTENTS_REGISTRY, HelpContentsRegistry } from '@spinnaker/core';

export const ACME_HELP_OVERRIDES = 'spinnaker.acme.help.overrides';
module(ACME_HELP_OVERRIDES, [HELP_CONTENTS_REGISTRY])
  .run((helpContentsRegistry: HelpContentsRegistry) => {
    const helpContents: { [key: string]: string } = {
      'cluster.description': `<p>The original cluster was invented by ACME scientists in 1932.</p>`,
    };
    Object.keys(helpContents).forEach(key => helpContentsRegistry.register(key, helpContents[key]));
  });
