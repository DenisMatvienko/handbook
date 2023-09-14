/**
 *    All build plugins
 *      template - add root template
 *      Add index.html into build folder
 *
 *      With help of DefinePlugin, we can add into app (like i18n) global variable
 *      first we need in i18n isDev check
 *
 *      Last requirement - if is Dev mode we are add these plugins in build,
 *      but if prod-didn't.
 *      This check made for prevent addition BuildAnalyzerPlugin in to prod build
 *      because BuildAnalyzerPlugin running in GitHub actions, and still be running
 *      interfere successfully build bundle in actions
 *
 *      https://www.npmjs.com/package/webpack-bundle-analyzer
 *
 *      @param __PROJECT__
 *        - Global variable, which get arg from main webpack.config.ts and get project field.
 *          Which contain 'frontend' - main environment for developing project.
 *        - In case: in storybook and jest configs, global variable __PROJECT__ has another keys;
 *          Jest.config : __PROJECT__: 'jest' etc..
 */

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const {
    isDev,
    paths,
    apiUrl,
    project,
  } = options;

  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }));
  }

  return plugins;
}
