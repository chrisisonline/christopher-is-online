const path = require("path")

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist")
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 8080
	},
	module: {
		rules: [
			{
	            test:/\.(s*)css$/,
	            use: [
	            {loader: 'style-loader'},
	            {loader: 'css-loader'},
	            {loader: 'sass-loader'}
	            ]
	        },
			{
	            test: /\.(png|jp(e*)g|svg)$/,
	            use: [{
	                loader: 'url-loader',
	                options: {
	                    limit: 8000, // Convert images < 8kb to base64 strings
	                    name: 'images/[hash]-[name].[ext]'
	                }
	            }]
	        }
		]
	}
}











