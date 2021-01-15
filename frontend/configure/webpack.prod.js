const HtmlWebpackPlugin = require('html-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = {
  entry: ['./src/index.tsx'],
  mode: 'production',
  plugins:[
    new HtmlWebpackPlugin({
      template: '../build/template.html',
    }),
    new ParallelUglifyPlugin({
      workerCount: 4,
      uglifyJS: {
          output: {
              beautify: false,
              comments: false
          },
          compress: {
              drop_console: true,
              collapse_vars: true,
              reduce_vars: true
          },
          warnings: false,
      }
    }),
  ],
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    concatenateModules: true,
  }
};
