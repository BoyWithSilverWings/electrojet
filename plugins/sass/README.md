<div align="center">
  <h1>SCSS/SASS Plugin for Electrojet CLI</h1>
  <a href="https://badge.fury.io/js/%40electrojet%2Fsass"><img src="https://badge.fury.io/js/%40electrojet%2Fsass.svg" alt="npm version" height="18"></a>
  <a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
  <a href="https://standardjs.com">
    <img alt="coding style: standard" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
  </a>
</div>

## Usage

1. Install:

```
npm install --save-dev node-sass @electrojet-sass
```

2. In your `electrojet.config.js` file, add:

```js
const sass = require("@electrojet-sass");

module.exports = {
  plugins: [
    {
      resolve: sass,
    }
  ]
}
```

3. Restart your running script.


