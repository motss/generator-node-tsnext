<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">generator-node-tsnext</h1>

  <p>Generator for developing in TypeScript Next</p>
</div>

<hr />

[![NPM][nodei-badge]][nodei-url]

[![Build Status][travis-badge]][travis-url]
[![Version][version-badge]][version-url]
[![Downloads][downloads-badge]][downloads-url]
[![MIT License][mit-license-badge]][mit-license-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![NSP Status][nsp-badge]][nsp-url]

[![Code of Conduct][coc-badge]][coc-url]

[![Coverage percentage][coveralls-badge]][coveralls-url]
[![codecov][codecov-badge]][codecov-url]

[![Codacy Badge][codacy-badge]][codacy-url]
[![codebeat badge][codebeat-badge]][codebeat-url]

> To scaffold a Node.js module or project written in TypeScript.

## Table of contents

- [Setup](#setup)
  - [Pre-requisites](#pre-requisites)
  - [Installation](#installation)
- [Getting To Know Yeoman](#getting-to-know-yeoman)
- [License](#license)

## Setup

### Pre-requisites

Please make sure that you have the followings installed on your machine:

- [node][nodejs-url] >= `8.9.0`
- [npm][npm-url] >= `5.5.1` ___(The minimum NPM version for [node:carbon][node-releases-url])___
- [typescript][typescript-url] >= `2.6.2` ___(No guarantee it will work below the version specified here)___
- [tslint][tslint-url] >= `5.8.0` ___(No guarantee it will work below the version specified here)___
- [TSLint extension for your favorite text editor][tslint-extension-url]

### Installation

First, install `generator-node-tsnext` using [npm][npm-url] (we assume you have pre-installed [node.js][nodejs-url]).

```sh
# Install with NPM
$ npm install -g generator-node-tsnext
```

Then generate your new project:

```sh
# Create a new directory if you haven't already.
# Then change to that new directory.
$ mkdir my-tsnext-app && cd my-tsnext-app

# Init with yo
$ npx yo node-tsnext
```

## Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman][yeoman-url].

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng

[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[typescript-url]: http://www.typescriptlang.org
[tslint-url]: https://palantir.github.io/tslint
[tslint-extension-url]: https://palantir.github.io/tslint/usage/third-party-tools
[yeoman-url]: http://yeoman.io

[nodei-badge]: https://nodei.co/npm/generator-node-tsnext.png?downloads=true&downloadRank=true&stars=true

[travis-badge]: https://img.shields.io/travis/motss/generator-node-tsnext.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/generator-node-tsnext.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/generator-node-tsnext.svg?style=flat-square
[mit-license-badge]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
[daviddm-badge]: https://img.shields.io/david/motss/generator-node-tsnext.svg?style=flat-square
[nsp-badge]: https://nodesecurity.io/orgs/motss/projects/fb100587-da3c-46c1-afd6-7e90bf411646/badge

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square

[coveralls-badge]: https://coveralls.io/repos/github/motss/generator-node-tsnext/badge.svg?branch=master
[codecov-badge]: https://codecov.io/gh/motss/generator-node-tsnext/branch/master/graph/badge.svg

[codacy-badge]: https://api.codacy.com/project/badge/Grade/1ea482be29d14b848f5f8b34ca8e9dd9
[codebeat-badge]: https://codebeat.co/badges/2e98378b-4e11-497e-a692-ba66a4d1c71a

[nodei-url]: https://nodei.co/npm/generator-node-tsnext/

[travis-url]: https://travis-ci.org/motss/generator-node-tsnext
[version-url]: https://www.npmjs.com/package/generator-node-tsnext
[downloads-url]: http://www.npmtrends.com/generator-node-tsnext
[mit-license-url]: https://github.com/motss/generator-node-tsnext/blob/master/LICENSE
[daviddm-url]: https://david-dm.org/motss/generator-node-tsnext
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/fb100587-da3c-46c1-afd6-7e90bf411646

[coc-url]: https://github.com/motss/generator-node-tsnext/blob/master/CODE_OF_CONDUCT.md

[coveralls-url]: https://coveralls.io/github/motss/generator-node-tsnext?branch=master
[codecov-url]: https://codecov.io/gh/motss/generator-node-tsnext

[codacy-url]: https://www.codacy.com/app/motss/generator-node-tsnext?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/generator-node-tsnext&amp;utm_campaign=Badge_Grade
[codebeat-url]: https://codebeat.co/projects/github-com-motss-generator-node-tsnext-master
