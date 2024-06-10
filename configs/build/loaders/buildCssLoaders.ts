/**
 *    Was installed loader with the newest version, if was problem -
 *    downgrade 'css-loader' 'sass' 'sass-loader' 'style-loader' by version in dependencies
 *
 *    @param css-loader
 *    Translates CSS into CommonJS
 *
 *    @param auto
 *    if in path we have .module.scss - return true, else -false
 *    for example: mean that will generate className just in files with .modules.scss extensions
 *
 *    @param localIdentName
 *      https://webpack.js.org/loaders/css-loader/#localidentname
 *      prod build - [hash:base64:8] - unique generate classNmaes,
 *      dev build - [path][name]__[local] - simple naming of
 *      mask for path: [path][name]__[local]--[hash:base64:5]
 *      classNames, for debugging and readble
 *
 *    @param resolve-url-loader
 *      Help sass work with url().
 *      Necessary should be before sass-loader.
 */

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev : boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]--[local]--[hash:base64:5]'
              : '[local]--[hash:base64:8]',
          },
        },
      },
      {
        loader: 'resolve-url-loader', // Necessary should be before sass-loader,
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  };
}
