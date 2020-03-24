module.exports = {
  entry: ['webpack/hot/dev-server', './src/index.tsx'],
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    compress: true,
    hot: true,
    inline: true,
    port: 8080,
    proxy: {
      '/api/': 'http://localhost:8000',
      '/pca/': 'http://localhost:8000'
    },
  }
};
