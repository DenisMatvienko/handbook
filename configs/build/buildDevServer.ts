import { BuildOptions } from './types/config'
import type { Configuration as DevServerConfigurations } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfigurations {
    return {
        port: options.port,
        open: true,
        //historyApiFallback - Allows to proxy requests through a specified index page (by default 'index.html'), 
        //useful for Single Page Applications that utilise the HTML5 History API.
        historyApiFallback: true,
        hot: true,

    }
}