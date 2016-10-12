module.exports = {
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /build|node_modules/, loader: 'babel-loader'},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};