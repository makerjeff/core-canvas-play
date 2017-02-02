/**
 * Created by jeffersonwu on 2/2/17.
 */

const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res){
    var stream = fs.createReadStream(process.cwd() + '/data/lorem.txt');

    //instead of res.send() or res.end()
    stream.pipe(res);
});

server.listen(3000);
console.log('Server started on port 3000');