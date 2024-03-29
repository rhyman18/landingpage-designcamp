const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
// const {PurgeCSSPlugin} = require('purgecss-webpack-plugin');
// const path = require('path');
// const glob = require('glob');

// const PATHS = {
//   src: path.join(__dirname, 'src'),
// };

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin(
          {
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  ['gifsicle', {interlaced: true}],
                  ['jpegtran', {progressive: true}],
                  ['optipng', {optimizationLevel: 5}],
                  [
                    'svgo',
                    {
                      plugins: [
                        {
                          name: 'preset-default',
                          params: {
                            overrides: {
                              removeViewBox: false,
                              addAttributesToSVGElement: {
                                params: {
                                  attributes: [
                                    {xmlns: 'http://www.w3.org/2000/svg'},
                                  ],
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  ],
                ],
              },
            },
          },
      ),
    ],
  },
  plugins: [
    // new PurgeCSSPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`, {nodir: true}),
    // }),
  ],
});
