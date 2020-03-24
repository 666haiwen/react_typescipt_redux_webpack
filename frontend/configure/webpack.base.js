const path = require('path');
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({ size: 6 });

module.exports = {
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')],
    mainFields: ['jsnext:main', 'browser', 'main'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    noParse:[/jquery|chartjs/],
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, '../src'),
        use: ['happypack/loader?id=babel'],
      },   
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.s[ac]ss$/,
        use: ['happypack/loader?id=styles'],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.json/,
        type: 'javascript/auto',
        include: path.resolve(__dirname, '../src'),
        use: ['json-loader']
      },
      {
        test: /\.(png|jpg|svg)$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        }
      }
    ]
  },
  plugins: [
    new HappyPack({
        id: 'babel',
        loaders: [{
          loader: 'babel-loader',
          query: {
            cacheDirectory: path.resolve(__dirname, '../webpack_cache'),
          },
        }],
        threadPool: happyThreadPool
    }),
    new HappyPack({
        id: 'styles',
        loaders: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]'
            },
            importLoaders: 2,
            sourceMap: true,
          }
        }, 'sass-loader'],
        threadPool: happyThreadPool
    }),
  ],
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                chunks: 'initial',
                minChunks: 2,
                maxInitialRequests: 5,
                minSize: 0
            },
            vendor: {
                test: /node_modules/,
                chunks: 'initial',
                name: 'vendor',
                priority: 10,
                enforce: true
            }
        }
    }
  }
};
