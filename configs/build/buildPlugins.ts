import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ isDev, paths }:
  BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    /* Plugins list */
    new HTMLWebpackPlugin({
      /* Add root template */
      template: paths.html,
    }),
    /* Add index.html into build folder */
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      // with help of DefinePlugin, we can add into app (like i18n) global variable
      // firstble we need in i18n isDev check
      __IS_DEV__: JSON.stringify(isDev),
    }),

    new ReactRefreshWebpackPlugin(),
  ];
}
