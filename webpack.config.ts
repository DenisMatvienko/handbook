import { buildWebpackConfig } from './configs/build/buildWebpackConfig';
import { BuildPaths, BuildEnv } from './configs/build/types/config';
import webpack from 'webpack';
import path from 'path';

export default (env: BuildEnv) => {
  // env -https://webpack.js.org/guides/environment-variables/
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode = env.mode || 'development'; // if env.mode didn't set, that mode is - development
  const isDev = mode === 'development';
  const PORT = env.port || 3000; // if env.port didn't set, that port is - 3000

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })

  return config;
} 