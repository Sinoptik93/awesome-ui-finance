const path = require("path");

module.exports = {
  mode: "production",
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
    extensions: [".ts", ".tsx", ".js"],
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
    ],
  },
};
