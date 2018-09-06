const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const { parse } = require('querystring');

const server = http.createServer( (req, res) => {

	if ( req.method === 'POST' ) {

		// ...

	}
	else {

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
	
						// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
	
							case '.svg':
								res.writeHead( 200, {'Content-Type': 'image/svg+xml'} );
								res.end( data.toString('utf-8') );
	
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
	
	}

});

const PORT = process.env.PORT || 6875;
server.listen( PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
