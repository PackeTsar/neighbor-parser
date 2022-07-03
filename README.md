# Neighbor Parser <img align="right" width="200" height="200" src="dist/static/logo.png">

[![Build Status](https://github.com/PackeTsar/neighbor-parser/actions/workflows/CI-CD.yml/badge.svg)](https://github.com/PackeTsar/neighbor-parser/actions/workflows/CI-CD.yml)

CDP and LLDP Neighbor Parser

#### Hosted at [neighborparser.com](https://neighborparser.com/)

Instructions for use exist on hosted web app


---


## Contribute

This project is very new and has been created out of need. If you have a feature you would like to see built into it, please open up an issue in Github and describe your desired feature.

If you find a need for a feature and you add it in yourself, or you fix a bug you found, please feel free to open up a merge request!


---


## Development Set Up
- Install NodeJS
- Clone repo and nav to `neighbor-parser/`
- Install dependencies with `npm install --include=dev`
- Install C8 globally with `npm install c8 -g`


---


## Development Cycle
- Run tests with `npm test`
- Lint with `npx eslint src/`
- Check for 100% code coverage: `c8 --100 npm test`
- Generate coverage report: `c8 report --reporter html`
- Compile to bundle: `npx webpack`


---


## Release Checklist
- Bump version (`index.html` and `package.json`)
- Run tests and lint
- Commit and push
