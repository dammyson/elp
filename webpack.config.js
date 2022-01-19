/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// // const webpack = require('webpack');
// const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

// const config = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].bundle.js',
//     chunkFilename: '[id].js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           'vue-style-loader',
//           'css-loader',
//         ],
//       },
//       {
//         test: /\.svg$/,
//         use: 'file-loader',
//       },
//       {
//         test: /\.png$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               mimetype: 'image/png',
//             },
//           },
//         ],
//       },
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//       },
//     ],
//   },
//   plugins: [
//     new BundleAnalyzerPlugin({
//       analyzerMode: 'static',
//       openAnalyzer: false,
//     }),
//     new VueLoaderPlugin(),
//   ],
//   resolve: {
//     extensions: [
//       '.js',
//       '.vue',
//     ],
//   },
//   stats: 'minimal',
// };

// module.exports = config;

const path = require('path');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ChunkRenamePlugin = require('webpack-chunk-rename-plugin');

function resolve(dir) {
  return path.join(
    __dirname,
    '/resources/js',
    dir
  );
}

const rawArgv = process.argv.slice(2);
const args = rawArgv.join(' ');
const report = rawArgv.includes('--report');
let plugins = [new ChunkRenamePlugin({ initialChunksWithEntry: true, '/js/app': 'js/app.js', '/js/vendor': 'js/vendor.js' })];
if (report) {
  plugins.push(new BundleAnalyzerPlugin({
    openAnalyzer: true,
  }));
}
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '/resources/js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('icons')],
        options: {
          symbolId: 'icon-[name]',
        },
      },
    ],
  },
  plugins: plugins,
  output: {
    filename: '[name].js',
    chunkFilename: 'js/[name].[chunkhash:6].js',
  },
  stats: 'minimal',
};
