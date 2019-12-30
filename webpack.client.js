const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/client.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public"
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loader: "babel-loader",
        exclude: "/node-modules",
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                target: { browser: ["last 2 versions"] }
              }
            ]
          ],
          plugins: ["transform-class-properties"]
        }
      }
    ]
  }
};
