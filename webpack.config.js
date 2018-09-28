const path = require("path");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "scripts.js",
    path: path.resolve(__dirname, "public", "js")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3001,
      proxy: 'http://localhost:8080/',
      files: [{
        match: [
          '**/*.html|**/*.css'
        ],
        fn: function (event, file) {
          if (event === "change") {
            const bs = require('browser-sync').get('bs-webpack-plugin');
            bs.reload();
          }
        }
      }]
    }, {
        reload: false
      })
  ],
  devtool: 'eval-source-map',
  devServer: {
    publicPath: "/js/",
    contentBase: path.join(__dirname, "public/")
  }
}
