const base = require('./webpack.base');
const merge = require('webpack-merge');

let config;
if (process.env.NODE_ENV === 'production') {
    config = require('./webpack.prod');
} else {
    config = require('./webpack.dev');
}

module.exports = merge(base, config);