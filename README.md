# eslint-config-javi

Adaptation from [Dany](https://github.com/danyshaanan)

## Installation

```bash
npm install --save-dev eslint-config-javi
```

## Usage and Config

An `eslintConfig` clasue in `package.json` or `.eslintrc.json` that extends the config and changes a rule:

```json
{
  "root": true,
  "extends": "ds",
  "env": {
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": 2
  }
}
```

## Inline Overrides

* Per line, e.g. `// eslint-disable-line no-alert`
* Per file, e.g. `/* eslint curly: 0 */`

## Links

* http://eslint.org/docs/rules/
* http://eslint.org/docs/developer-guide/shareable-configs.html
* [An Open Letter to JavaScript Leaders Regarding Semicolons](http://blog.izs.me/post/2353458699)
