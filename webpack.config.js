const path = require('path');

module.exports = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    /**
     * NOTE: These aliases allow us to alias React and ReactDOM
     * imports to window object libraries, which will need to get
     * separately imported and attached to the window object in
     * the challenge environment.
     *
     * References to them within react-native-web will then reference
     * these window objects.
     */
    alias: {
      "react": path.resolve(__dirname, "libs/react.js"),
      "react-dom": path.resolve(__dirname, "libs/react-dom.js")
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};