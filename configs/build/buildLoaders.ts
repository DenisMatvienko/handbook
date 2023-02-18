import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoaders';
import { BuildSvgLoader } from './loaders/buildSvgLoaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  /*
        https://webpack.js.org/guides/typescript/#loader

        Important module in file. Handle other file which
        not .js (is - css, scss, png, jpeg, ts, tsx etc..)
        This will direct webpack to enter through ./index.ts,
        load all .ts and .tsx files through the ts-loader,
        and output a bundle.js file in our current directory.

        If didn't use TypeScript - we need to use babel for work with jsx
    */
  const svgLoader = BuildSvgLoader();

  const babelLoader = {
    test: /\.m?(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/, // regex
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
    fileLoader,
  ];
}
