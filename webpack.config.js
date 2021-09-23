const path = require("path");

module.exports = {
	watch: true,
	mode: 'development',
	
	devServer: { 
		contentBase: path.join(__dirname, "dist/"), 
		compress: true, 
		port: 4500, 
		hot: true, 
		publicPath: "http://localhost:4500/dist/", 
		progress: true, 
		/**hostOnly: true, BUG ValidationError: webpack Dev Server Invalid Options*/ 
		clientLogLevel: "info" 
	},

	// devServer: {
	// 	bonjour: true
	//   },
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	// optimization: {
	// 	removeAvailableModules: false,
	// 	removeEmptyChunks: false,
	// 	splitChunks: false,
	// },

};



//sudo yarn webpack serve --bonjour
//sudo npx webpack serve --bonjour