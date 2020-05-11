[ ![Codeship Status for qualityshepherd/protractor-example](https://app.codeship.com/projects/56e27ab0-abb1-0132-4f48-46f15878b48e/status?branch=master)](https://app.codeship.com/projects/68348)

# Protractor Example
* Protractor - Mocha example using the http://computer-database.herokuapp.com/computers app

## Example Protractor project that:
* Makes use of page objects
* Use Mocha
* is written using es6

## Setup:
* Install [Node](http://nodejs.org) (v8.x.x or later)
* `git clone https://github.com/rkidd123/test`
* `npm i` to install the project dependencies

## Run tests:
* run tests via plain Protractor `node_modules/.bin/protractor conf.js`
* run tests `npm test` (runs via flake, which re-runs failed tests)

## Troubleshooting
* run `node -v` and make sure your node version is 8.x.x or greater
* `webdriver-manager` _should_ have updated on install, but if not, run `npm run update` to be sure
