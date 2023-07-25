/**
 *  Global webpack config
 *
 *  @param env
 *    - https://webpack.js.org/guides/environment-variables/
 *
 *  @const mode
 *    - if env. mode didn't set, that mode is - development
 *
 *  @const PORT
 *    - if env. port didn't set, that port is - 3000
 */

import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './configs/build/buildWebpackConfig';
import { BuildPaths, BuildEnv } from './configs/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const apiUrl = env.apiUrl || 'http://localhost:8000';
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    apiUrl,
    port: PORT,
  });

  return config;
};
