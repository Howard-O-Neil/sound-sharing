const path = require("path");
const webpack = require("webpack");

const ROOT = path.resolve(__dirname, "src");
const DESTINATION = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  watch: true,
  entry: "./src/index.tsx",

  context: ROOT,

  entry: {
    main: "./index.tsx",
  },

  output: {
    filename: "[name].bundle.js",
    path: DESTINATION,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    modules: [ROOT, "node_modules"],
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "eval",
  devServer: {
    host: "0.0.0.0",
    port: 3000, //port that we're using for local host (localhost:8080)
    contentBase: path.resolve(__dirname, "./dist"), // tells webpack to serve from this
    publicPath: "/",
    hot: true,

  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: ["**/dist", "**/node_modules"],
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        use: "source-map-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: "ts-loader",
      },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
