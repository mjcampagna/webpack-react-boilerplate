const http = require('http');
const path = require('path');
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
					const ext = path.extname( req.url );
					switch(ext) {

						case '.css':
							res.writeHead( 200, {'Content-Type': 'text/css'} );
							res.end( data.toString('utf-8') );
	
						case '.js':
							res.writeHead( 200, {'Content-Type': 'text/javascript'} );
							res.end( data.toString('utf-8') );
	
						default:
							res.end( data.toString('utf-8') );

					}
				}
			});
		}
	});

});

const PORT = process.env.PORT || 3000;
server.listen( PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
