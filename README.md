<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">generator-node-tsnext</h1>

  <p>Generator for developing in TypeScript Next</p>
</div>

<hr />

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]

[![Build Status][travis-badge]][travis-url]
[![CircleCI][circleci-badge]][circleci-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> To scaffold a Node.js module or any project written in [TypeScript][typescript-url].

## Table of contents

- [Table of contents](#table-of-contents)
- [Setup](#setup)
  - [Pre-requisites](#pre-requisites)
  - [Installation](#installation)
    - [NPM](#npm)
    - [NPX](#npx)
- [Getting To Know Yeoman](#getting-to-know-yeoman)
- [License](#license)

## Setup

### Pre-requisites

Please make sure that you have the following dependencies installed and setup correctly:-

- [Node.js][nodejs-url] >= `8.9.0`
- [NPM][npm-url] >= `5.5.1` ___(The minimum NPM version for [node:carbon][node-releases-url])___
- [TypeScript][typescript-url] >= `3.0.1` ___(No guarantee it will work below the version specified here)___
- [TSLint][tslint-url] >= `5.11.0` ___(No guarantee it will work below the version specified here)___
- [TSLint extension for your favorite text editor][tslint-extension-url]

### Installation

#### NPM

First, install `generator-node-tsnext` using [NPM][npm-url] (we assume you have pre-installed [Node.js][nodejs-url]).

```sh
# Install globally with NPM
$ npm install -g yo generator-node-tsnext
```

Then generate your new project:

```sh
# Create a new directory if you haven't already.
# Then change to that new directory.
$ mkdir my-app && cd my-app

# Init
$ yo node-tsnext
```

#### NPX

[NPX][npx-url] comes in a package as of [Node.js][nodejs-url] `v8.9.0`. This means that you can run any CLI written in [Node.js][nodejs-url] without globally installing it.

```sh
# Create a new directory if you haven't already.
# Then change to that new directory.
$ mkdir my-app && cd my-app

# Install packages with NPX and execute the CLI with this one-liner
$ npx -p yo -p generator-node-tsnext -- yo node-tsnext
```

## Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman][yeoman-url].

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[node-releases-url]: https://nodejs.org/en/download/releases
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[npx-url]: https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
[tslint-extension-url]: https://palantir.github.io/tslint/usage/third-party-tools
[tslint-url]: https://palantir.github.io/tslint
[typescript-url]: https://www.typescriptlang.org
[yeoman-url]: https://yeoman.io

<!-- Badges -->
[version-badge]: https://flat.badgen.net/npm/v/generator-node-tsnext
[node-version-badge]: https://flat.badgen.net/npm/node/generator-node-tsnext
[mit-license-badge]: https://flat.badgen.net/npm/license/generator-node-tsnext

[downloads-badge]: https://flat.badgen.net/npm/dm/generator-node-tsnext
[total-downloads-badge]: https://flat.badgen.net/npm/dt/generator-node-tsnext?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/generator-node-tsnext

[travis-badge]: https://flat.badgen.net/travis/motss/generator-node-tsnext
[circleci-badge]: https://flat.badgen.net/circleci/github/motss/generator-node-tsnext
[daviddm-badge]: https://flat.badgen.net/david/dep/motss/generator-node-tsnext
[codecov-badge]: https://flat.badgen.net/codecov/c/github/motss/generator-node-tsnext?label=codecov
[coveralls-badge]: https://flat.badgen.net/coveralls/c/github/motss/generator-node-tsnext?label=coveralls

[codebeat-badge]: https://codebeat.co/badges/2e98378b-4e11-497e-a692-ba66a4d1c71a?style=flat-square
[codacy-badge]: https://api.codacy.com/project/badge/Grade/1ea482be29d14b848f5f8b34ca8e9dd9?style=flat-square
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[version-url]: https://www.npmjs.com/package/generator-node-tsnext
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: https://github.com/motss/generator-node-tsnext/blob/master/LICENSE

[downloads-url]: https://www.npmtrends.com/generator-node-tsnext
[packagephobia-url]: https://packagephobia.now.sh/result?p=generator-node-tsnext

[travis-url]: https://travis-ci.org/motss/generator-node-tsnext
[circleci-url]: https://circleci.com/gh/motss/generator-node-tsnext/tree/master
[daviddm-url]: https://david-dm.org/motss/generator-node-tsnext
[coveralls-url]: https://coveralls.io/github/motss/generator-node-tsnext?branch=master
[codecov-url]: https://codecov.io/gh/motss/generator-node-tsnext

[codebeat-url]: https://codebeat.co/projects/github-com-motss-generator-node-tsnext-master
[codacy-url]: https://www.codacy.com/app/motss/generator-node-tsnext?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/generator-node-tsnext&amp;utm_campaign=Badge_Grade
[coc-url]: https://github.com/motss/generator-node-tsnext/blob/master/CODE_OF_CONDUCT.md
