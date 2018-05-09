# SPFx React Jest Testing sample #

## Summary

This sample shows how to add the popular [Jest Testing Framework](https://facebook.github.io/jest/) to SPFx client side solution and start using it for typescript unit testing.
The setup includes unit tests examples, code coverage reports in different formats, visual studio code unit test debug configurations for typescript, setting a coverage threshold (gates) for continuous integration and continuous deployment scenarios.

## Visual Studio Code Typescript debugging support for the Jest unit tests

The Visual Studio Code launch.json has all the debug configurations needed to start debugging the unit tests for your SPFx solution. 
There is a _Jest All_ configuration that will execute all the tests on demand. 
There is also a _Jest Watch_ (watcher) configuration that will let live execution or debugging only on the affected by a change unit tests (if the solution is part of hg/git repo) and will provide immediate feedback if a test passes or fails on component code change. This is good option for Test Driven Development scenarios.

![SharePoint Framework Jest Visual Studio Code - debugging unit test](./assets/spfx-event-emitter.gif)

## Sinonjs is included as mocking framework for the SPFx solution

The solution also includes [Sinonjs](http://sinonjs.org/) that can be used to spawn spies, stubs and mocks.

## Enzyme is included to extend to unit tests support for React Components

Enzyme is a testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

## Basic unit tests scenarios included to demonstrate how Jest, Sinon and Enzyme can be used to test the SPFx React components

I wrote several unit tests to demonstrate how all testing libraries can be used together to test a React component with business logic and external dependencies included. Examples for mocking promises, pnpjs calls, https calls and spying on methods included for a quick start in unit testing your SPFx solution.

## Built-in Jest code coverage

![SharePoint Framework Jest tests code coverage reports](./assets/spfx-event-emitter.gif)

Jest uses [Istanbul](https://github.com/gotwarlost/istanbul) under the hood to produce various code coverage reports including live VS code terminal output. Such reports can be integrated in CI tools like VSTS (Visual Studio Team Services) or Jenkins.

### Jest coverage threshold for continuous deployment pipeline setups

Jest coverage thresholds are set to yield error and potentially fail a build or pre-build if there isn't 100% coverage on branches, functions, lines and statements together. The thresholds can be changed by altering the solution packages.json file where the Jest configuration is.

```JavaScript
"coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    }
```

## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/drop-1.4.1-green.svg)

## Applies to

* [SharePoint Framework](http://dev.office.com/sharepoint/docs/spfx/sharepoint-framework-overview)
* [Office 365 developer tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)

## Prerequisites

- Office 365 subscription with SharePoint Online.
- SharePoint Framework [development environment](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment) already set up.

## Solution

Solution|Author(s)
--------|---------
react-jest-testing | Velin Georgiev ( [@VelinGeorgiev](https://twitter.com/velingeorgiev) )

## Version history

Version|Date|Comments
-------|----|--------
0.0.1|May 9, 2018 | Initial commit

## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository.
- Open the command line, navigate to the web part folder and execute:
    - `npm i`
    - `npm test` **(NOT gulp test)**

## Features

This Web Part illustrates the following concepts on top of the SharePoint Framework:

- Using React for building SharePoint Framework client-side web parts.
- Using Jest Testing Framework for SPFx unit tests.
- Unit tests included to demonstrate how spies, mocks can be used.
- The use of Enzyme to speed up React unit test productivity.
- The use of [SharePoint Patterns and Practices Reusable Client-side Libraries (PnP Js)](https://github.com/pnp/pnpjs).


<img src="https://telemetry.sharepointpnp.com/sp-dev-fx-webparts/samples/react-jest-testing" />


