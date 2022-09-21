const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  //se estou em ambiente de desenvolvimento utilizar 'development', senão 'production'
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map", //é usado para que o código no console da web fique igual ao código que está no arquivo
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/, //ao encontrar um arquivo .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
          ].filter(Boolean),
          },
        }, //executar com o babel
      },
      {
        test: /\.scss$/, //ao encontrar um arquivo .css
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"], //executar com o style-loader e css-loader
      },
    ],
  },
};
