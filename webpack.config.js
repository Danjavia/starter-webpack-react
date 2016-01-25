const path = require( 'path' );

const PATHS = {
  	app: path.join(__dirname, 'app'),
  	build: path.resolve(__dirname, 'build')
};

module.exports = {
    entry: [
      	'webpack/hot/dev-server',
      	'webpack-dev-server/client?http://localhost:8080',
      	path.resolve(__dirname, 'app/main.js')
    ],
    
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
    },

    module: {
	  loaders: [
	    {
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel', // 'babel-loader' is also a legal name to reference
	      query: {
	        presets: ['react', 'es2015']
	      }
	    }
	  ]
	}
};