const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            title: 'Rxjs-demo',
            filename: 'index.html',
            inject: 'body',
        })
    ]
}