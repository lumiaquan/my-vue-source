const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    module: {
        rules: [

            {

                test: /\.(css|less)$/,

                use: [

                    {

                        loader: "style-loader",

                    },

                    {

                        loader: "css-loader",

                        options: {

                            importLoaders: 1,

                        },

                    },

                    {

                        loader: "less-loader",

                        lessOptions: {

                            javascriptEnabled: true,

                        },

                    },

                ],

            },

        ],
    },
    plugins: {

        html: new HtmlWebpackPlugin({

            title: 'tristana',

            template: 'public/index.html'

        }),

    },
    devServer: {

        contentBase: path.resolve(__dirname, "dist"),

        hot: true,

        historyApiFallback: true,

        compress: true,

    },
};
