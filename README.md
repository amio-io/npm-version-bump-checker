# npm-version-bump-checker
Checks if version in local package.json is higher than in npm

## Description

- This library will whrow an error containing the remote and local version when **local version <= remote version**

- This library can help you ensure the version inside `package.json` was increased before being merged to master

## Installation

  ```bash
  npm install npm-version-bump-checker --save
  ```

## Usage
Add the proper npm script for your NodeJS platform to the `scripts` key in `package.json`:
```json
"can-publish-nix": "npm info $npm_package_name version | npm-version-bump-checker"
"can-publish-win": "npm info %npm_package_name% version | npm-version-bump-checker"
```
