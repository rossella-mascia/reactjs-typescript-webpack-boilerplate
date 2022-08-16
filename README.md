# Typescript Webpack 5 Boilerplate

A starter frontend boilerplate built with:

- [TypeScript](https://www.typescriptlang.org/)
- [Babel (8)](https://babeljs.io/)
- [Webpack (5)](https://webpack.js.org/)
<!-- - [PostCSS](https://postcss.org/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/) -->

This also uses [lint-staged](https://github.com/okonet/lint-staged) for running pre-commit checks.

## Features

- Support for both TypeScript and JavaScript as needed.
- May be extended to be used with [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), or [Angular](https://angular.io/).
- Webpack Dev Server plugin for local development.
- Minification of TypeScript/JavaScript and CSS/SCSS processed files.
- Support for both CSS and SCSS as needed.
- Assets optimization.
- Webpack Bundle Analyzer for visualising script output and usage.

## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)

## Folder structure

```none
src
└── styles
│    ├── _global.scss
│    └── _variables.scss
│    └── index.scss
├── index.ts
public
├── assets
├── favicon.ico
└── index.html
```

- src
  - The entry typescript file is [index.ts](src/index.ts).
  - The [helpers/set-message](src/helpers/set-message) folder is a sample folder for how to test using Jest.
  - Local files are imported using the `'@'` alias. See [index.ts](src/index.ts) file for example.
- scr/css
  - Add your styles here and `@import` them to the entry [styles.css](src/css/styles.css) file.
- public
  - Edit the [index.html](public/index.html) in the public folder to suite your needs.
  - Replace the [favicon.ico](public/favicon.ico) with your own icon.
- public/assets.
  - Add your assets, to the [assets](public/assets) folder.

## Configuration

You may change the configuration for Webpack within the [webpack](webpack) folder.

## Setup

### Install dependencies

Run:

```sh
  npm install
```

## Development

### Server

Run:

```sh
  npm run start
```

This will create a server at `http://localhost:8080/` or at the port number specified in the [webpack/configuration/config.js](webpack/configuration/config.js) file.

Automatically reloads after each file change.

### Production build

Run:

```sh
  npm run build
```

Will output all build files into the `dist` folder.

## Testing (Jest)

Run:

```sh
  yarn test
```

or watch files

```sh
  yarn test:watch
```

## Linting

### All files

Run:

```sh
  yarn lint:all
```

To fix all possible errors automatically run:

```sh
  yarn lint:all:fix
```

### TypeScript (tsc)

Run:

```sh
  yarn lint:check-types
```

There is no automatic fix option for TypeScript.

### TypeScript and JavaScript (ESLint)

Run:

```sh
  yarn lint:scripts
```

To fix all possible errors automatically run:

```sh
  yarn lint:scripts:fix
```

### Styles (StyleLint)

Run:

```sh
  yarn lint:styles
```

To fix all possible errors automatically run:

```sh
  yarn lint:styles:fix
```

## Check bundle size

Run:

```sh
  yarn check-size
```

This will create a server at `http://localhost:8888/` or at the port number specified using the `-p or --port` option via the `cli`.

## License

[MIT](https://github.com/rossellamascia/webpack-html-typescript/blob/main/LICENSE.md)
