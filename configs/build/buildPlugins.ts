
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
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
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}