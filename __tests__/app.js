'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-node-tsnext:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        packageName: `${process.cwd().replace(/(?:.*\/)(.+)/i, '$1')}`,
        description: 'Yet another generator to disrupt the world',
        homepage: 'https://github.com/awesome-tsnext',
        repoUrl: 'git@github.com:cashblack/awesome-tsnext.git',
        authorName: 'Cash Black',
        authorEmail: 'cash.black@gmail.com',
        authorUrl: 'cash-black.com',
        gitName: 'cashblack'
      })
      .toPromise();
  });

  it('creates files', () => {
    assert.file([
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.npmignore',
      '.npmrc',
      '.travis.yml',

      'CONTRIBUTORS',
      'LICENSE',
      'README.md',

      'gulpfile.js',
      'tsconfig.json',
      'tslint.json',
      'package.json',

      'src/index.ts'
    ]);
  });
});
