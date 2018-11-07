const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: { "main-client": './App/index.tsx' },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            include: /App/,
            use: 'babel-loader'
        }
    ]},
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wwwroot/js'),
        publicPath: path.resolve(__dirname, 'wwwroot')
    },
    watch: true
};