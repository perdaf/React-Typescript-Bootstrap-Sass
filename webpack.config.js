var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        stats: 'errors-only',
        port: 9000
    },
    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    'browsers': ['> 1%', 'last 2 versions']
                                }),
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {}
                    },
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre",
            }

        ]
    },
    resolve: {
        extensions: [".js", "jsx", ".ts", ".tsx", ".json", ".scss"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Boilerplate with Bootstrap and Sass",
            template: path.resolve(__dirname, './src/template/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
};