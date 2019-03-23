<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;"><%= packageName %></h1>

  <p><%= docDescription %></p>
</div>

<hr />

[![Follow me][follow-me-badge]][follow-me-url]

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![CircleCI][circleci-badge]][circleci-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> Better greeting message

## Table of contents <!-- omit in toc -->

- [Pre-requisites](#pre-requisites)
- [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
    - [Node.js](#nodejs)
    - [Native ES modules or TypeScript](#native-es-modules-or-typescript)
- [API Reference](#api-reference)
  - [greeting([name])](#greetingname)
  - [greetingSync([name])](#greetingsyncname)
- [License](#license)

## Pre-requisites

- [Node.js][nodejs-url] >= 10.11.0
- [NPM][npm-url] >= 6.4.1 ([NPM][npm-url] comes with [Node.js][nodejs-url] so there is no need to install separately.)

## Setup

### Install

```sh
# Install via NPM
$ npm install --save <%= packageName %>
```

### Usage

#### Node.js

```js
const greeting = require('<%= packageName %>');
```

#### Native ES modules or TypeScript

```ts
import greeting from '<%= packageName %>';
```

## API Reference

### greeting([name])

- `name` <[string][string-mdn-url]> Name of the person to greet at.
- returns: <[Promise][promise-mdn-url]<[string][string-mdn-url]>> Promise which resolves with a greeting message.

### greetingSync([name])

This methods works the same as `greeting(name)` except that this is the synchronous version.

## License

[MIT License](https://<%= gitName %>.mit-license.org/) © <%= authorName %>

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases

<!-- MDN -->
[array-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[set-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

<!-- Badges -->
[follow-me-badge]: https://flat.badgen.net/twitter/follow/<%= gitName %>?icon=twitter

[version-badge]: https://flat.badgen.net/npm/v/<%= packageName %>?icon=npm
[node-version-badge]: https://flat.badgen.net/npm/node/<%= packageName %>
[mit-license-badge]: https://flat.badgen.net/npm/license/<%= packageName %>

[downloads-badge]: https://flat.badgen.net/npm/dm/<%= packageName %>
[total-downloads-badge]: https://flat.badgen.net/npm/dt/<%= packageName %>?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/<%= packageName %>
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/<%= packageName %>

[circleci-badge]: https://flat.badgen.net/circleci/github/<%= gitName %>/<%= packageName %>?icon=circleci
[daviddm-badge]: https://flat.badgen.net/david/dep/<%= gitName %>/<%= packageName %>
[codecov-badge]: https://flat.badgen.net/codecov/c/github/<%= gitName %>/<%= packageName %>?label=codecov&icon=codecov
[coveralls-badge]: https://flat.badgen.net/coveralls/c/github/<%= gitName %>/<%= packageName %>?label=coveralls

[codebeat-badge]: https://codebeat.co/badges/123
[codacy-badge]: https://api.codacy.com/project/badge/Grade/123
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[follow-me-url]: https://twitter.com/<%= gitName %>?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=<%= gitName %>/<%= packageName %>

[version-url]: https://www.npmjs.com/package/<%= packageName %>
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: https://github.com/<%= gitName %>/<%= packageName %>/blob/master/LICENSE

[downloads-url]: https://www.npmtrends.com/<%= packageName %>
[packagephobia-url]: https://packagephobia.now.sh/result?p=<%= packageName %>
[bundlephobia-url]: https://bundlephobia.com/result?p=<%= packageName %>

[circleci-url]: https://circleci.com/gh/<%= gitName %>/<%= packageName %>/tree/master
[daviddm-url]: https://david-dm.org/<%= gitName %>/<%= packageName %>
[codecov-url]: https://codecov.io/gh/<%= gitName %>/<%= packageName %>
[coveralls-url]: https://coveralls.io/github/<%= gitName %>/<%= packageName %>?branch=master

[codebeat-url]: https://codebeat.co/projects/github-com-<%= gitName %>-<%= packageName %>-master
[codacy-url]: https://www.codacy.com/app/<%= gitName %>/<%= packageName %>?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=<%= gitName %>/<%= packageName %>&amp;utm_campaign=Badge_Grade
[coc-url]: https://github.com/<%= gitName %>/<%= packageName %>/blob/master/CODE_OF_CONDUCT.md
