const path = require('path');

module.exports = {
    entry: { "main-client": './App/index.tsx' },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            include: /App/,
            use: 'babel-loader'
        }
        ]
    },
    mode: "development",
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wwwroot/js'),
        publicPath: '/'
    },
    watch: true
};