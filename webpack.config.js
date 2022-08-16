const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode: mode,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        static: path.resolve(__dirname, 'build'),
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
            title: 'Webpack app + typescript',
            filename: 'index.html',
            inject: 'body',
            favicon: './src/public/favicon.ico',
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            minify: mode
        })
    ]
}