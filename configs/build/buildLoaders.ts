import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    /* 
        https://webpack.js.org/guides/typescript/#loader

        Important module in file. Handle other file which not .js (is - css, scss, png, jpeg, ts, tsx etc..)
        This will direct webpack to enter through ./index.ts, load all .ts and .tsx files through the ts-loader,
        and output a bundle.js file in our current directory.

        If didn't use TypeScript - we need to use babel for work with jsx
    */
    const cssLoader = {
        // Was installed loader with newest version, if was problem -
        // downgrade 'css-loader' 'sass' 'sass-loader' 'style-loader' by version in dependencies
        test: /\.s[ac]ss$/i,
        use: [
            // Creates if dev-mode - style-loader, else - `MiniCssExtractPlugin`
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                // Translates CSS into CommonJS
                loader: "css-loader",
                options: {
                    modules: {
                        // if in path we have .module.scss - return true, else -false
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // prod build we have - [hash:base64:8] - unique generate classNmaes, 
                        // dev build we have - [path][name]__[local] - sinple naming of classNames, for debugging and readble
                        localIdentName: isDev 
                        ? '[path][name]__[local]--[hash:base64:5]' 
                        : '[hash:base64:8]',
                    },
                    
                }
            },
            "sass-loader",
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/, //regex
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader,
    ]
}