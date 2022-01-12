const config = require('./webpack.config');
const Mix = require('laravel-mix');
require('laravel-mix-eslint');
// const path = require('path');

// function resolve(dir) {
//   return path.join(
//     __dirname,
//     '/resources/js',
//     dir
//   );
// }

// Mix.listen('configReady', webpackConfig => {
//   // Add "svg" to image loader test
//   const imageLoaderConfig = webpackConfig.module.rules.find(
//     rule =>
//       String(rule.test) ===
//       String(/(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/)
//   );
//   imageLoaderConfig.exclude = resolve('icons');
// });

Mix.webpackConfig(config);

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

Mix
  .js('resources/js/app.js', 'public/js')
  .extract([
    'vue',
    // 'axios',
    // 'vuex',
    // 'vue-router',
    // 'vue-i18n',
    // 'element-ui',
    // 'echarts',
    // 'highlight.js',
    // 'sortablejs',
    // 'dropzone',
    // 'xlsx',
    // 'tui-editor',
    // 'codemirror',
  ])
  .options({
    processCssUrls: false,
    postCss: [
      require('autoprefixer'),
    ],
  });

if (Mix.inProduction()) {
  Mix.version();
} else {
  if (process.env.LARAVUE_USE_ESLINT === 'true') {
    Mix.eslint();
  }
  // Development settings
  Mix
    .sourceMaps()
    .webpackConfig({
      devtool: 'cheap-eval-source-map', // Fastest for development
    });
}

// const Mix = require('laravel-Mix');
// Mix.js('resources/js/app.js', 'public/js')
//   .sass('resources/sass/app.scss', 'public/css')
//   .sourceMaps();

// if (Mix.inProduction()) {
//   Mix.version();
// }
