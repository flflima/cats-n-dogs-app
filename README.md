# CatsNDogsApp 

[![Build Status](https://www.travis-ci.com/flflima/cats-n-dogs-app.svg?branch=main)](https://www.travis-ci.com/flflima/cats-n-dogs-app)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

The application is available [here](https://cats-n-dogs-app.herokuapp.com/).

It access two APIs through a service that agreggates the two responses: 

- The Dog CEO API (https://dog.ceo/dog-api/)
- random.cat API (https://aws.random.cat/)

The service which does the merge is [Cats And Dogs](https://github.com/flflima/cats-and-dogs).

## Development server

Run `npm run start:dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running linter

Run `ng lint` to execute the linter checks.
