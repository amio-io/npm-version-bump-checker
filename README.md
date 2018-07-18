# npm-version-bump-checker

### Description
Checks if version in local package.json is higher than in npm

| Return (undefined) and terminate the script successfully |
|:-:|
| local version > remote version |

| Throw an error containing the remote and local version |
|:-:|
| local version < remote version |
| local version = remote version |

### Installation

- Install the package from the npm registry
  ```bash
  npm install npm-version-bump-checker --save
  ```

- Add the npm script below to `package.json`

  OS | npm script
  -|-
  \*nix | ``` "prepublishOnly": "npm info $npm_package_name version \| npm-version-bump-checker" ```
  Win | ``` "prepublishOnly": "npm info %npm_package_name% version \| npm-version-bump-checker" ```
  
- You can change the script name if desired
  > [prepublishOnly](https://docs.npmjs.com/misc/scripts): 
  Run BEFORE the package is prepared and packed, ONLY on npm publish.
