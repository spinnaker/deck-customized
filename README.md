# Customized Deck

This example shows how to customize a few parts of Deck, the Spinnaker UI.

This custom build of Deck uses the packages published to the public NPM registry at https://www.npmjs.com/org/spinnaker.
To create a custom build of Deck for your organization, you should pull in `@spinnaker/core` and the published NPM package
for your cloud provider.  Having your cloud provider's UI published to NPM is a prerequisite to this custom build approach.

This repository shows examples of three integration points:

### Header customization

This customization replaces the main Spinnaker header with your own custom header

### Cloud provider override

This customization replaces specific cloud provider templates with your own custom template.
The provided example customizes the AWS server group and instance details pane.

### Custom Data Source

This adds a custom data source to Spinnaker, which shows up as a separate tab for an application.
The custom data source pulls Spinnaker repositories from Github and participates in the application data refresh lifecycle.

### Custom Help Contents

The help contents on the Clusters page header is overridden.

### Home Page

The home page has been slightly altered

### Custom Exception Handler

A custom exception handler is stubbed in to show how you can propagate exceptions to an external service.

You can test it out (if you're running AWS) by selecting a server group, then choosing "Throw an exception" from the Server Group Actions menu.

## Prerequisites

Make sure that [node](http://nodejs.org/download/) and [yarn](https://yarnpkg.com/en/docs/install) are installed on your
system. The minimum versions for each are listed in `package.json`.

## Quick Start

Run the following commands (in the root directory) to get all dependencies installed in Deck and to start the server:

* `yarn`
* `yarn start`

The app will start up on [localhost:9000](localhost:9000).

## Environment variables

* `API_HOST` overrides the default Spinnaker API host.

For example, `API_HOST=http://localhost:8084 yarn start` will run Deck
