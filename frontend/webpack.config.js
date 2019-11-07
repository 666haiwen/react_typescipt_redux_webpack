const path = require("path");

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'build/dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { 
        test: /\.(ts|tsx)$/, 
        use:['awesome-typescript-loader', 'eslint-loader']
      },
      { 
        enforce: 'pre', 
        test: /\.js$/, 
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.json/,
        type: 'javascript/auto',
        use: ['json-loader']
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        }
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devServer: {
    port: 8060,
    // proxy: {
    //   '/': 'http://localhost:8000'
    // },
    watchContentBase: true,
  }
};
