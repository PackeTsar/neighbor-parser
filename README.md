# Neighbor Parser <img align="right" width="200" height="200" src="dist/static/logo.png">

[![Build Status](https://github.com/PackeTsar/neighbor-parser/actions/workflows/CI-CD.yml/badge.svg)](https://github.com/PackeTsar/neighbor-parser/actions/workflows/CI-CD.yml)

CDP and LLDP Neighbor Parser

#### Hosted at [neighborparser.com](https://neighborparser.com/)

Instructions for use exist on hosted web app


---


## Contribute

This project is very new and has been created out of need. If you have a feature you would like to see built into it, or find a bug which should be fixed, please open up an issue in Github and describe your desired feature. Make sure to include neighbor data command output so any issues can be reproduced.

If you find a need for a feature and you add it in yourself, or you fix a bug you found, please feel free to open up a merge request!

If neither of those options work for you, and you just want to support this project, you can buy me a coffee :grin:

<a href="https://www.buymeacoffee.com/packetsar" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>


---


## Development Set Up
- Install NodeJS
- Clone repo and nav to `neighbor-parser/`
- Install dependencies with `npm install --include=dev`
- Install C8 globally with `npm install c8 -g`
- Serve website with `npx webpack serve --mode=development`
  - Browse to http://localhost:8080/
  - JS exceptions should resolve to real file paths and errors should be helpful


---


## Development Cycle
- Run tests with `npm test`
- Lint with `npx eslint src/`
- Check for 100% code coverage: `c8 --100 npm test`
- Generate coverage report: `c8 report --reporter html`


---


## Release Checklist
- Bump version (`index.html` and `package.json`)
- Run tests and lint
- Compile to bundle: `npx webpack`
- Commit and push
- Update Wiki with new version info
