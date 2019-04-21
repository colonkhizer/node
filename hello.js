var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000

http.createServer(function (req,res) {
	var u = url.parse(req.url , true);
	console.log(u);
	var filename = "." + u.pathname;
	if(filename == './') { filename = './index'; }
	filename = filename + ".html";
	console.log(filename);
	fs.readFile(filename , function(err,data) {
		if(err){
			res.writeHead(404 , {'Content-Type': 'text/html'});
			return res.end('404 Not Found');
		}
		res.writeHead(200 , {'Content-Type': 'text/html'});
	console.log('...Incoming Request: ' + "" + req.url);
	res.write(data);
	res.end();
	})
}).listen(PORT);


// var q = url.parse(req.url , true).query;
	// var dates = q.year + " " + q.month;	