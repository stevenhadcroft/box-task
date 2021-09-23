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
		clientLogLevel: "info" 
	},
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
};