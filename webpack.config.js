const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    //entry: {main: path.resolve(__dirname, "src", "index.js")}, // per modificare il punto di ingresso
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(sass|css|scss)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    //  'css-loader',
                    // 'postcss-loader',
                    // 'sass-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader',
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ]
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.(sass|css|scss)$/i,
    //             use: ["style-loader", "css-loader", "sass-loader"]
    //         }
    //     ]
    // },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        })
    ],
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'dist'), // percorso nostra directory di output in dist
    //     open: true, // indica di aprire una finestra brouwser
    //     clientLogLevel: 'silent', // in modo che le richieste non siano registrate alla console
    //     port: 9000, // la porta di localhost
    //     hot: true
    //   },
};