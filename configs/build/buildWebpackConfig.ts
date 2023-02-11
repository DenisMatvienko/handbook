import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions):
  webpack.Configuration {
  const { paths, mode, isDev } = options;

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
            /* Now we shouldn't add extention
             of tsx, ts, js into path (from: './test.ts' to: './test') */
            buildResolve(options),

    devtool:
            /* https://webpack.js.org/guides/development/#using-source-maps
                For example, if you bundle three source files (a.js, b.js, and c.js)
                into one bundle (bundle.js) and one of the source files contains an
                 error, the stack trace will point to bundle.js
            */
            isDev
              ? 'inline-source-map' // add source-maps in dev build
              : undefined, // remove source-maps from prod build
    // dev-server run just in dev build. prod build - didn't
    devServer: isDev ? buildDevServer(options) : undefined,

  };
}
