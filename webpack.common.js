const path =require('path');

module.exports = {
  entry:{
    main:'./src/scripts/index.ts',
  },
  output:{
    path:(path.join(__dirname,'assets')),
    filename:'scripts/[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module:{
    rules:[
      {
        loader:'ts-loader',
        test:/\.ts$/
      }
    ]
  }
}