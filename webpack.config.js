const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        //   JS loader
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        //   Css loader
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        //  image loader
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        //   font loader
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        //   CSV loader
        test: /\.(csv|tsv)$/,
        use: ["cvs-loader"]
      },
      {
        //   xml-loader
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
