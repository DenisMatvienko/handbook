/**
 * historyApiFallback - Allows to proxy requests through a specified
 * index page (by default 'index.html'),
 * useful for Single Page Applications that utilise the HTML5 History API.
 */

import type { Configuration as DevServerConfigurations }
  from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfigurations {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
