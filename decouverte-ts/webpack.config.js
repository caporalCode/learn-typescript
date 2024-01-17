const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    resolve: {
        extensions: [ '.ts', '.js']
    },
    entry: "./src/main.ts",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    optimization: {
        noEmitOnErrors: true
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: './src/templates/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
}