/**
 *       Webpack config.
 *        - contain each described in folder components (buildPlugins, buildLoaders, buildResolve)
 *
 *        - Add extensions of tsx, ts, js into path
 *          (from: './test.ts' to: './test')
 *
 *        https://webpack.js.org/guides/development/#using-source-maps
 *        - For example, if you bundle three source files (a.js, b.js, and c.js)
 *        into one bundle (bundle.js) and one of the source files contains an
 *        error, the stack trace will point to bundle.js
 *
 *        @param dev-server
 *        - run just in dev build. in prod build - didn't
 *          is dev ? add source-maps in dev build : remove source-maps from prod build
 */

import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {
    paths,
    mode,
    isDev,
  } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },
    resolve:
        buildResolve(options),

    devtool:
        isDev
          ? 'inline-source-map'
          : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,

  };
}
