const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    globalObject: "this",
    filename: "index.js",
    path: path.resolve(__dirname, "dist/"),
    library: {
      name: "awesome-ui-finance",
      type: "umd",
    },
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.module.scss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                mode: "local",
                localIdentName: "[path]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
