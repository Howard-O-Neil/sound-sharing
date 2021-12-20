const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT = path.resolve(__dirname, "src");
const DESTINATION = path.resolve(__dirname, "dist");

module.exports = (env) => {
  production_val = false

  if (env.production) 
    production_val = true
  
  return {
    mode: production_val ? "production" : "development",
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

    // Dev tool watchOptions
    // false for production, fastest build
    // source-map for development, support source map, very slow build
    devtool: production_val ? false : "source-map",

    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
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
          test: /\.scss$/,
          exclude: /node_modules/,
          use : [
            { loader: "style-loader" },
            { loader: "css-loader",
              options: {
                import: true,
                modules: true,
              }
            },
            { loader: "sass-loader" },
          ]
        },
        // load files
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: "file-loader",
        },
      ],
    },

    // split code
    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all',
      },
    },

    // generate index.html from template
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "template.html"),
      }),
    ],
  }
};
