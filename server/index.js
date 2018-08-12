const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer( (req, res) => {

	const urlPath = url.parse( req.url ).pathname;
	let filePath = `./dist/${urlPath}`;

	fs.stat( filePath, (err, fileInfo) => {
		if ( err ) {
			res.statusCode = 404;
			res.end(`Resource not found: ${urlPath}`);
		} else {
			if ( fileInfo.isDirectory() ) {
				filePath += '/index.html';
			}

			fs.readFile( filePath, (err, data ) => {
				if ( err ) {
					res.statusCode = 500;
					res.end( `Server error: "${err}"` );
				} else {
					res.end( data.toString('utf-8') );
				}
			});
		}
	});

});

const PORT = process.env.PORT || 3000;
server.listen( PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
