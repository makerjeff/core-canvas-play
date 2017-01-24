/**
 * Created by jeffersonwu on 12/22/16.
 */

const fs = require('fs');
var Transform = require('stream').Transform;
var inherits = require('util').inherits;

//event listener method
// bears.on('data', function(chunk){
//     console.log(chunk.toString());
// });

//pipe method
//bears.pipe(process.stdout);


//constructor?
function ActualBears(){
    Transform.call(this);
}

//TODO:find out more
inherits(ActualBears, Transform);

ActualBears.prototype._transform = function(chunk, enc, done){

    chunk = chunk.toString().split('\n').filter(function(bear){
        return (bear !== 'koala');
    }).join('\n');

    this.push(chunk);
    done();
};

var read = fs.createReadStream(process.cwd() + '/public/bears.txt', {encoding: 'utf8'});
var write = fs.createWriteStream(process.cwd() + '/public/actualBears.txt');

read.pipe(new ActualBears()).pipe(write);