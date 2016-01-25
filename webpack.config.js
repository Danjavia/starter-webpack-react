const path = require( 'path' );
const node_modules = path.resolve( __dirname, 'node_modules' );
const pathToReact = path.resolve( node_modules, 'react/dist/react.min.js' );

const PATHS = {
  	app: path.join(__dirname, 'app' ),
  	build: path.resolve(__dirname, 'build' )
};

module.exports = {
    entry: [
      	'webpack/hot/dev-server',
      	'webpack-dev-server/client?http://localhost:8080',
      	path.resolve(__dirname, 'app/main.js')
    ],

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
	        presets: ['react', 'es2015']
	      }
	    }
	  ]
	}
};