//MODLUE NOTES
//the underscore.string module is required and needs to be installed 'npm install underscore.string'
//for the page to view at "/" it must be named 'index.html'
//images, css, and javascript files go in the 'assets' folder, but you do not need to include '/assets' in your link/src
//example: <link rel="stylesheet" href="css/style.css">

var http = require('http');
var fs = require('fs');
var static_contents = require('./static_contents.js');

server = http.createServer(function(request, response){
	static_contents(request, response);
});

server.listen(3000);
console.log ('running in localhost at port 3000');