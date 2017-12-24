'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const execa = require('execa');
const githubUsername = require('github-username');
const ghUser = require('gh-user');

function getDefault() {
  const getUserName = execa('git', ['config', '--get', 'user.name']);
  const getUserEmail = execa('git', ['config', '--get', 'user.email']);

  return Promise.all([getUserName.then(r => r.stdout), getUserEmail.then(r => r.stdout)])
    .then(([userName, userEmail]) => {
      return githubUsername(userEmail).then(username => {
        return Promise.all([
          userName,
          userEmail,
          username,
          userEmail ? ghUser(username) : Promise.resolve({})
        ]);
      });
    })
    .then(([name, email, userName, ghUser]) => {
      return {
        name,
        email,
        username: userName,
        homepage: ghUser.html_url
      };
    })
    .catch(() => ({})); // Return empty object.
}

module.exports = class extends Generator {
  initializing() {
    this.user = {};

    return getDefault().then(({ name, email, username, homepage } = {}) => {
      this.user.name = name || '';
      this.user.email = email || '';
      this.user.username = username || '';
      this.user.homepage = homepage || '';
    });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the stunning ${chalk.red('generator-node-tsnext')} generator!`));

    const fallbackDescription =
      'Simple Node.js module to output greeting message, written in TypeScript';
    const prompts = [
      {
        type: 'input',
        name: 'packageName',
        message: 'What would you like your project to be named?',
        default: () => {
          return process.cwd().replace(/(?:.*[/\\])([^/\\]+?)[/\\]*?$/gi, '$1');
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description'
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'Homepage URL'
      },
      {
        type: 'input',
        name: 'repoUrl',
        message: 'Link to the repository'
      },
      {
        type: 'input',
        name: 'authorName',
        message: "Author's Name",
        default: this.user.name
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: "Author's email",
        default: this.user.email
      },
      {
        type: 'input',
        name: 'authorUrl',
        message: "Author's homepage",
        default: this.user.homepage
      },
      {
        type: 'input',
        name: 'gitName',
        message: 'Github username or organization',
        default: this.user.username
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = Object.assign({}, props, {
        docDescription: (props.description || fallbackDescription).replace(
          /typeScript/i,
          '[TypeScript][typescript-url]'
        )
      });
    });
  }

  writing() {
    const TPLS = ['_package.json', '_README.md', 'LICENSE', '_.gitignore', '_.npmrc'];
    const RAW_GLOB_PATTERNS = ['{.,!(_)}*'];

    RAW_GLOB_PATTERNS.map(rawGlobPattern =>
      this.fs.copy(`${this.templatePath()}/**/${rawGlobPattern}`, this.destinationPath())
    );

    TPLS.map(tpl =>
      this.fs.copyTpl(
        this.templatePath(tpl),
        this.destinationPath(tpl.replace(/(_)/gi, '')),
        this.props
      )
    );
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true,
      callback: () => {
        console.info(
          `✨  Your Node.js project in TypeScript ${chalk.green(
            this.props.packageName
          )} is ready! ✨`
        );
      }
    });
  }
};
