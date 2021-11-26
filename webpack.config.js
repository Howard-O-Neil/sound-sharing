const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT = path.resolve(__dirname, "src");
const DESTINATION = path.resolve(__dirname, "dist");

module.exports = {
  mode: "production",
  // watch: true,
  entry: "./src/index.tsx",

  context: ROOT,

  entry: {
    main: "./index.tsx",
  },

  output: {
    filename: "[name].bundle.js",
    path: DESTINATION,
  },

  // Config resolve
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    modules: [ROOT, "node_modules"],
  },

  // Dev tool options for source map
  devtool: "eval",

  // config devserver
  devServer: {
    static: './dist'
  },

  // config watch options
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: ["**/node_modules"],
  },

  // config module
  module: {
    rules: [
      // load existing source map in libraries into webpack
      {
        enforce: "pre",
        test: /\.js$/,
        use: "source-map-loader",
      },
      // use babel loader
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // load style
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      // load files
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: "file-loader",
      },
    ],
  },

  // generate index.html from template
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "template.html"),
    }),
  ],
};
