const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    mode: 'development',
    output: {
        filename: '[file].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
          {
            test: /\.html$/,
            loader: 'html-loader',
          },
          {
            test: /\.(svg|png|jpg|gif)$/,
            type: 'asset/resource'
          },
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
          }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sample Webpack Scaffolding',
            template: './src/index.html'
        }),
    ]
};