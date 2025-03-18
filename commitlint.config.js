// build: Changes that affect the build system or external dependencies.
// ci: Changes to CI configuration files and scripts.
// chore: Other changes that don't modify src or test files.
// docs: Documentation only changes.
// feat: A new feature.
// fix: A bug fix.
// perf: A code change that improves performance.
// refactor: A code change that neither fixes a bug nor adds a feature.
// revert: Reverts a previous commit.
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.).
// test: Adding missing tests or correcting existing tests.

// Enforces the type of commit message to be one of the specified types
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};

export default config;
