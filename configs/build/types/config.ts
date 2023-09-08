/**
 *       Types for webpack config build
 *
 *       @param BuildEnv
 *        - Environment Variables
 *          https://webpack.js.org/guides/environment-variables/
 *
 *       @param project(BuildOptions)
 *        - split environments
 *        Solve several problems as example:
 *          When we use fetch in useEffect inside a component that is used in a storybook.
 *          At such moments, using the storybook, we spam request the server, unnecessarily.
 *        For that problem needs split environments.
 *        In that case:
 *        -  Storybook env - using with story
 *        -  Frontend env - main env
 *        -  Jest env - testing env with jest
 */

export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: 'storybook' | 'frontend' | 'jest';
}
