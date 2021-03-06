import chalk from 'chalk';
import ghUser from 'gh-user';
import Generator from 'yeoman-generator';
import yosay from 'yosay';

export class Index extends Generator {
  public user: any;
  public props: any;
  public readonly packageName: string = 'generator-node-tsnext';

  public initializing() {
    try {
      const ghTask = this.user.github.username()
        .then((un: string) => Promise.all([un, ghUser(un)]))
        .then(([un, info]: [string, { html_url: string }]) => {
          return [un, info.html_url];
        })
        .catch(() => []);

      return ghTask.then(([username, homepage]: [string, string]) => {
        this.user.info = {
          username,
          homepage,
          name: this.user.git.name(),
          email: this.user.git.email(),
        };
      });
    } catch (_) {
      this.user.info = {
        name: this.user.git.name() || '',
        email: this.user.git.email() || '',
        username: '',
        homepage: '',
      };
    }
  }

  public prompting() {
    this.log(yosay(`Welcome to the stunning ${chalk.red(this.packageName)}!`));

    const fallbackDescription =
      'Simple Node.js module to output greeting message, written in TypeScript';
    const prompts = [
      {
        type: 'input',
        name: 'packageName',
        message: 'What would you like your project to be named?',
        default: () => {
          return process.cwd().replace(/(?:.*[/\\])([^/\\]+?)[/\\]*?$/gi, '$1');
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'Homepage URL',
      },
      {
        type: 'input',
        name: 'repoUrl',
        message: 'Link to the repository',
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'Author\'s Name',
        default: this.user.info.name,
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'Author\'s email',
        default: this.user.info.email,
      },
      {
        type: 'input',
        name: 'authorUrl',
        message: 'Author\'s homepage',
        default: this.user.info.homepage,
      },
      {
        type: 'input',
        name: 'gitName',
        message: 'Github username or organization',
        default: this.user.info.username,
      },
    ];

    return this.prompt(prompts).then((props) => {
      this.props = Object.assign({}, props, {
        docDescription: (props.description as string || fallbackDescription).replace(
          /typeScript/i, '[TypeScript][typescript-url]'),
        thisYear: new Date().getFullYear(),
      });
    });
  }

  public writing() {
    const NON_TPLS = [
      'src/index.ts',
      'tsconfig.json',
      'tsconfig.prod.json',
      'tslint.json',
      'tslint.prod.json',
    ];
    const TPLS = [
      '_.editorconfig',
      '_.gitattributes',
      '_.gitignore',
      '_.npmrc',
      '_LICENSE',
      '_package.json',
      '_README.md',
    ];

    NON_TPLS.map((n) => {
      return this.fs.copy(
        this.templatePath(n),
        this.destinationPath(n),
        this.props);
    });

    TPLS.map((n) => {
      return this.fs.copyTpl(
        this.templatePath(n),
        this.destinationPath(n.replace(/(_)/gi, '')),
        this.props);
    });
  }

  public install() {
    this.installDependencies({
      bower: false,
      npm: true,
    });
  }
}

export default Index;
module.exports = Index;
