const path = require( 'path' );
const node_modules = path.resolve( __dirname, 'node_modules' );

const PATHS = {
  	app: path.join(__dirname, 'app' ),
  	build: path.resolve(__dirname, 'build' )
};

module.exports = {

    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],

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
	        presets: [ 'react', 'es2015' ]
	      }
	    },

      // LESS
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },

      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
	  ]
	}
};