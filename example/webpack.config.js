module.exports = {
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /build|node_modules/, loader: 'babel-loader?stage=0'},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};