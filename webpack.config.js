const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode: mode,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'source-map',
    devServer: {
        static: path.resolve(__dirname, 'build'),
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
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
            minify: mode,
        }),
        new MiniCssExtractPlugin({})
    ]
}