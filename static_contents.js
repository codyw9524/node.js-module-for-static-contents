//MODLUE NOTES
//the underscore.string module is required and needs to be installed 'npm install underscore.string'
//for the page to view at "/" it must be named 'index.html'
//images, css, and javascript files go in the 'assets' folder, but you do not need to include '/assets' in your link/src
//example: <link rel="stylesheet" href="css/style.css">

var strRightBack = require('underscore.string/strRightBack');
var fs = require('fs');
module.exports = function(req, res){
	if(req.url.indexOf('.css') != -1){
		fs.readFile('./assets/' + req.url, function(err, content){
			if(err){
				res.writeHead(404);
				res.write('No such file');
				res.end();
			}
			else{
				res.writeHead(200, {'content-type': 'text/css'});
				res.write(content);
				res.end();
			}
		});
	}
	else if(req.url.indexOf('jpg') != -1 || req.url.indexOf('png') != -1 || req.url.indexOf('gif') != -1 || req.url.indexOf('tif') != -1){
		fs.readFile('./assets/' + req.url, function(err, content){
			if(err){
				res.writeHead(404);
				res.write('No such file');
				res.end();
			}
			else{
				var img_tag = strRightBack(req.url, '.');
				res.writeHead(200, {'content-type': 'image/' + img_tag});
				res.write(content);
				res.end();
			}
		});
	}
	else if(req.url.indexOf('.js') != -1){
		fs.readFile('./assets/' + req.url, function(err, content){
			if(err){
				res.writeHead(404);
				res.write('No such file');
				res.end();
			}
			else{
				res.writeHead(200, {'content-type': 'text/javascript'});
				res.write(content);
				res.end();
			}
		});
	}
	else if(req.url === "/"){
		fs.readFile('./views/index.html', 'utf8', function(err, content){
			if(err){
				res.writeHead(404);
				res.write('No such file');
				res.end();
			}
			else{
				res.writeHead(200, {'content-type': 'text/html'});
				res.write(content);
				res.end();
			}
		});
	}
	else{
		fs.readFile('./views' + req.url + '.html', 'utf8', function(err, content){
			if(err){
				res.writeHead(404);
				res.write('No such file');
				res.end();
			}
			else{
				res.writeHead(200, {'content-type': 'text/html'});
				res.write(content);
				res.end();
			}
		});
	}
}