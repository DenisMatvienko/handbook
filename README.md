# handbook

[![codacy](https://img.shields.io/badge/codacy-B-green)](https://app.codacy.com/gh/DenisMatvienko/handbook/dashboard) ![Like action](https://shields.io/github/actions/workflow/status/DenisMatvienko/handbook/main.yml?branch=main&style=flat)

Hello! There will be a guide here, it will be called Handbook. Here you create and compose your own articles for classes and preparation. It built with [**_webpack_**](https://webpack.js.org/), [**_react_**](https://react.dev/), [**_redux_**](https://redux.js.org/), [**_FSD_**](https://feature-sliced.design/), [**_eslint_**](https://eslint.org/) and will be hosted by [**_Netlify_**](https://netlify.com/).

## Live demo

![](./src/shared/assets/readme-preview/preview-github@dark.png#gh-light-mode-only)![](./src/shared/assets/readme-preview/preview-github@light.png#gh-light-mode-only)

## Features

- Build by (*webpack*), create dev or prod build, use BundleAnalyzerPlugin
- Lazy loading, code splitting components
- Dark, Light, Pink theme
- Async reducers by custom DynamicModuleLoader
- Authorization
- Profile options
- Validation
- Posts and tags
- Comments
- Sort filters, order filters, search
- Infinite scroll
- Scroll restoration
- I18n mode
- Error boundary
- GH Actions, lint, unit, ui tests


> [!NOTE]
> Adaptive layout is unavailable now. Use with desktop view.

## Development

> [!CAUTION]
> Current node version is 17.4.0, keep in mind it with deps. All deps will be upgraded in near future.

> [!TIP]  
> You can use `nvm` for sharing between node versions. That short guid how it uses.

[**_nvm docs_**](https://github.com/coreybutler/nvm-windows),
[**_nvm windows install_**](https://github.com/coreybutler/nvm-windows/releases)

```bash
# installing node 17.4.0 by nvm
nvm install 17.4.0

# show list of node versions
nvm list

# use version
nvm use 17.4.0

# deps install
npm install
```

## Using and hot keys

```bash
# generate production build
npm run build:prod

# generate dev build
npm run build:dev

# run dev server with json-server for backend
npm run start:dev

# run dev server by yarn
npm run start:dev:yarn

# run ts linting, with prefix :fix you can fix errors which fall lint
npm run lint:ts

# run scss linting, with prefix :fix you can fix errors which fall lint
npm run lint:scss

# run unit tests
npm run test:unit

# run ui tests. It will just while storybook server is also run
npm run test:ui

# generate ui report with ui changes. In root loki path, you can track generated .html file with changes.
npm run test:ui:report

# pre-commit check
npm run prepare
```

## License

Licensed under the MIT license.
