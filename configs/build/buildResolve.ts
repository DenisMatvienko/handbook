/**
 * https://webpack.js.org/configuration/resolve/#resolvemodules
 * Another way of acces to absolute path on alias is:
 * Remove preferAbsolute and modules, add alias: "@":paths.srs
 * absolute path will - @/shared/classNames
 * with current configurations with alias: {} + modules + preferAbsolute
 * absolute path is - shared/classNames
 *
 * explicitly indicate - index as main file by PUBLIC API
 */

import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolve(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
