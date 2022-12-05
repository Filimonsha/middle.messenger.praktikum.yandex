const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const IS_PROD = false
module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".ts"]
    },
    entry: {
        main: path.resolve(__dirname, "./src/index.ts")
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "index.js"
    },
    module: {
        rules: [{
            test: /\.ts/,
            loader: "ts-loader",
            options: {
                configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
            exclude: /(node_modules)/
        },
            {
                test: /\.(scss|css)$/,
                exclude: path.resolve(__dirname, "./node_modules"),
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                    {
                        loader: "css-loader",

                        options: {
                            sourceMap: !IS_PROD,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: !IS_PROD
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: !IS_PROD
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style-[hash].css"
        }),
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, "./static/index.html")
            }
        ),
    ],
    devServer: {
        open: true,
        hot: true,
        watchFiles: [
            path.resolve(__dirname, "./static/index.html")
        ]
    }
}
