# **Handbook**

[![codacy](https://img.shields.io/badge/codacy-B-green)](https://app.codacy.com/gh/DenisMatvienko/handbook/dashboard)
![Like action](https://shields.io/github/actions/workflow/status/DenisMatvienko/handbook/main.yml?branch=main&style=flat)

Hello! This will be a helper in your work, it will be called Handbook. Here you create and compose your own folders for 
classes and preparation. It built with [**_webpack_**](https://webpack.js.org/), [**_react_**](https://react.dev/),
[**_redux_**](https://redux.js.org/), [**_FSD_**](https://feature-sliced.design/), [**_eslint_**](https://eslint.org/)
and will be hosted by [**_Netlify_**](https://netlify.com/).

## Live demo

![light](https://github.com/DenisMatvienko/production-dynamic-line/blob/9e3d68fe472fca4a9633795c8412923eca2acb33/src/shared/assets/readme-preview/preview-github@light.png.png)

## Development

> [!CAUTION]
> Current node version is 17.4.0, keep in mind it with deps. All deps will be upgraded in near future.

And also:

> [!TIP]  
> You can use `nvm` for sharing between node versions. Here's a quick guid how it uses.
> [**_nvm docs_**](https://github.com/coreybutler/nvm-windows),
> [**_nvm windows install_**](https://github.com/coreybutler/nvm-windows/releases)

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

## Features

1. [x] Build by **webpack**, create dev or prod build, use **BundleAnalyzerPlugin**
2. [x] Lazy loading, code splitting components
3. [x] Dark, Light, Pink theme
4. [x] Async reducers by custom DynamicModuleLoader
5. [x] Authorization
6. [x] Profile options
7. [x] Validation
8. [x] Posts and tags
9. [x] Comments
10. [x] Sort filters, order filters, search
11. [x] Infinite scroll
12. [x] Scroll restoration
13. [x] **I18n** mode
14. [x] Error boundary
15. [x] GH Actions, lint, unit, ui tests

> [!NOTE]
> Adaptive layout, not for long, is unavailable now. Please, use app with desktop view.

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
