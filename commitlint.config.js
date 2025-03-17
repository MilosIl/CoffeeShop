// rules: This section defines custom rules for commit messages.
// The array of allowed types:
// build: Changes that affect the build system or external dependencies.
// ci: Changes to CI configuration files and scripts.
// docs: Documentation only changes.
// feat: A new feature.
// fix: A bug fix.
// perf: A code change that improves performance.
// refactor: A code change that neither fixes a bug nor adds a feature.
// revert: Reverts a previous commit.
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.).


const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['ci',  'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'build']
    ]
  }
};

export default config;
