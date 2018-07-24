# npm-version-bump-checker
Checks if version in local package.json is higher than in npm

## Description

This utility will throw an error when **local version <= remote version**

You can pair this tool with CI/CD tools to ensure your `package.json` version is properly increased before being merged to master.

## Installation

  ```bash
  npm install npm-version-bump-checker --save-dev
  ```

## Usage
Add the proper npm script for your NodeJS platform to the `scripts` key in `package.json`:
```json
"can-publish-nix": "npm info $npm_package_name version | npm-version-bump-checker"
"can-publish-win": "npm info %npm_package_name% version | npm-version-bump-checker"
```
