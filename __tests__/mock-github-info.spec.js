jest.mock('shelljs', () => {
  return {
    which: () => true,
    exec: (cmd) => {
      return {
        stdout: cmd === 'git config --get user.email'
          ? 'cashblack.gmail.com'
          : 'Cash Black',
      };
    },
  };
});

jest.mock('github-username', () => jest.fn().mockImplementation(() => {
  return Promise.resolve('cashblack');
}));

jest.mock('gh-user', () => jest.fn().mockImplementation(() => {
  return Promise.resolve({
    html_url: 'https://github.com/cashblack',
  });
}));

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe(`mock Github info`, () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .withPrompts({
        packageName: `${process.cwd().replace(/(?:.*\/)(.+)/i, '$1')}`,
        description: 'Yet another generator to disrupt the world',
        homepage: 'https://github.com/awesome-next',
        repoUrl: 'git@github.com:cashblack/awesome-next.git',
        authorName: 'Cash Black',
        authorEmail: 'cash.black@gmail.com',
        authorUrl: 'cash-black.com',
        gitName: 'cashblack',
        thisYear: new Date().getFullYear(),
      });
  });

  it('creates files', () => {
    assert.file([
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.npmrc',

      'LICENSE',
      'README.md',

      'package.json',
      'tsconfig.json',
      'tsconfig.prod.json',
      'tslint.json',
      'tslint.prod.json',

      'src/index.ts',
    ]);
  });

});
