# Branches guide

### Development Branch

The `development` branch is used for active development. All new features, bug fixes, and other changes are first committed to this branch.

### Staging Branch

The `staging` branch is used for testing the application before it is released to production. Changes from the `development` branch are merged into the `staging` branch for testing. This branch should be stable and free of major bugs.

### Master Branch

The `master` branch is the production-ready branch. It contains the stable version of the application that is deployed to production. Only thoroughly tested and approved changes from the `staging` branch are merged into the `master` branch.

## Contributing

1. Clone the repository.
2. Create a new branch (`git checkout -b task_number-feature-branch`).
3. Make your changes.
4. Commit your changes using the convention from `commitlint.config.js` (`git commit -m "feat: add some feature"`).
5. Push to the branch (`git push origin task_number-feature-branch`).
6. Open a pull request.

## Commit rules

### 1. Body Rules

- **`body-leading-blank`**: Requires a blank line before the commit body.

  - ✅ `"feat: add feature\n\nThis feature..."`
  - ❌ `"feat: add feature\nThis feature..."`

- **`body-max-line-length`**: Limits each line in the commit body to **100 characters**.
  - ✅ `"Good detailed body... (≤100 chars)"`
  - ❌ `"Very long body line exceeding 100 chars...."`

### 2. Scope Rules

- **`scope-case`**: Enforces lowercase scope.
  - ✅ `"feat(auth): add login"`
  - ❌ `"feat(Auth): add login"`

### 3. Subject Rules

- **`subject-case`**: Prevents capitalized subjects.

  - ✅ `"fix: improve performance"`
  - ❌ `"fix: Improve performance"`

- **`subject-empty`**: Subject must not be empty.

  - ✅ `"feat: add API"`
  - ❌ `"feat:"`

- **`subject-full-stop`**: Subject must not end with a period (`.`).
  - ✅ `"fix: update docs"`
  - ❌ `"fix: update docs."`

### 4. Type Rules

- **`type-case`**: Enforces lowercase type.

  - ✅ `"fix: update deps"`
  - ❌ `"Fix: update deps"`

- **`type-empty`**: Type must not be empty.

  - ✅ `"feat: add logging"`
  - ❌ `": add logging"`

- **`type-enum`**: Only allows specific commit types:
  - Allowed: `"build"`, `"chore"`, `"ci"`, `"docs"`, `"feat"`, `"fix"`, `"perf"`, `"refactor"`, `"revert"`, `"style"`, `"test"`, `"translation"`, `"security"`, `"changeset"`
  - ✅ `"feat: new feature"`
  - ❌ `"new: something"`
