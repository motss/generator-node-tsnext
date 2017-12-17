'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-zumata-chatbot:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        packageName: `${process.cwd().replace(/(?:.*\/)(.+)/i, '$1')}`,
        description: 'Yet another awesome chatbot to disrupt the world',
        homepage: 'https://github.com/awesome-chatbot',
        repoUrl: 'git@github.com:Zumata/awesome-chatbot.git'
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
      'CONTRIBUTORS',
      'LICENSE',
      'README.md',
      'clean-dir.sh',
      'gulpfile.ts',
      'tsconfig.json',
      'tslint.json',
      'package.json',

      'src/index.ts'
    ]);
  });
});
