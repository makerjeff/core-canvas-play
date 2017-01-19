/**
 * Created by jeffersonwu on 12/22/16.
 */


var fs = require('fs');

var readableStream = fs.createReadStream(process.cwd() + '/public/images/doodads.png', {encoding: 'utf8'});
var writableStream = fs.createWriteStream(process.cwd() + '/public/images/doodads_copied.png');


// LONG WAY:
// readableStream.on('data', function(dataChunk){
//     console.log('data chunk received.');
//     writableStream.write(dataChunk);
// });

// EASIER WAY:
readableStream.pipe(writableStream);