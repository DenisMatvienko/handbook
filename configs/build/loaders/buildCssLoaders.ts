import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev : boolean) {
  return {
    // Was installed loader with the newest version, if was problem -
    // downgrade 'css-loader' 'sass' 'sass-loader' 'style-loader' by version in dependencies
    test: /\.s[ac]ss$/i,
    use: [
      // Creates if dev-mode - style-loader, else - `MiniCssExtractPlugin`
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        // Translates CSS into CommonJS
        loader: 'css-loader',
        options: {
          modules: {
            // if in path we have .module.scss - return true, else -false
            // for example: mean that will generate className just in files with .modules.scss extensions
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // prod build we have - [hash:base64:8] - unique generate classNmaes,
            // dev build we have - [path][name]__[local] - sinple naming of
            // classNames, for debugging and readble
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },

        },
      },
      'sass-loader',
    ],
  };
}
