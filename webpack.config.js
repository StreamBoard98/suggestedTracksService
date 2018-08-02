module.exports = {
 entry: [
   './client/src/index.jsx'
 ],
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: ['babel-loader']
     },
     {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ {
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: "[local]___[hash:base64:5]"
          }
        }, ],
      },
   ]
 },
 resolve: {
   extensions: ['*', '.js', '.jsx']
 },
 output: {
   path: __dirname + '/client/dist',
   publicPath: '/',
   filename: 'bundle.js'
 },

};
