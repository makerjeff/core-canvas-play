/**
 * Node LED Scanner
 * Created by jefferson.wu on 11/13/16.
 */

// ========================
// MODULES ================
// ========================
const express           = require('express');
const app               = express();
const http              = require('http').Server(app);
const chalk             = require('chalk');
const clear             = require('clear');
const io                = require('socket.io')(http);
const serialport        = require('serialport');

// =========================
// CONFIGURATION ===========
// =========================

const port              = process.env.PORT || 3000;
var connectedClients    = 0;

//------------------------
// enable serialport -----
var SerialPort = serialport.SerialPort;
var systemUSBPort = '/dev/cu.usbmodem1411';    //macbook air, right side USB port.
var myPort = new SerialPort(systemUSBPort, {baudRate: 9600, parser: serialport.parsers.readline(';')}, function(err){
    if(err){
        console.log(chalk.red(err));
    } else {
        console.log(chalk.green('Serial device connected on ' + systemUSBPort));
    }
});

// ====================
// serial port events =
// ====================
// myPort.on('open', function(){});
// myPort.on('data', function(data){});
// myPort.on('close', function(){});
// myPort.on('error', function(err){});

//------------------------
//--- enable socket.io ---
io.on('connection', function(socket){
    connectedClients++;
    console.log(chalk.blue(socket.id) + ' connected. Total: ' + connectedClients);
    io.emit('userCount', connectedClients);

    //SOCKET events here.
    socket.on('disconnect', function(){
        connectedClients--;
        console.log(chalk.red(socket.id) + ' disconnected. Total: ' + connectedClients);
        io.emit('userCount', connectedClients);
    });
});




// ====================
// MIDDLEWARE =========
// ====================


// --- basic logger ---
// TODO: switch to Morgan, or encapsulate into module
app.use(function(req,res,next){
    console.log(new Date() + ' ' + req.method + ' ' + req.url + ' ');
    next();
});

// ==================
// ROUTES ===========
// ==================



// TEMP ROUTES
app.get('/', function(req, res){
res.send('<b>You\'re on an active server.  Find the right page.</b>');
});

app.get('/promisevideo', function(req, res){
    promisedb.getFakeAsyncDataObject(2000).then(function(result){
        res.json(result);

    }).catch(function(reason){
        res.json(reason);
    });
});

// Serial port routes
app.get('/listsp', function(req, res){

    var outputPorts = [];
    serialport.list(function(err, ports){
        ports.forEach(function(elem, ind, arr){
            outputPorts.push(elem.comName);
            console.log(chalk.yellow(elem.comName));
        });
        res.json(outputPorts);
    });
});

app.get('/led1', function(req, res){
    myPort.write('2');
    res.send('ok');
});


// PAGE ROUTER =
app.get('/:page', function(req, res){
    res.sendFile(process.cwd() + '/public/' + req.params.page + '.html');
    console.log(chalk.yellow('sending file ' + req.params.page + '.html'));
});

// ========================
// CATCH ALL MIDDLEWARE ===
// ========================
//static files
app.use(express.static('public/'));

// 404
app.use(function(req,res,next){
    res.status(404);
    res.send('404: Page not found!');
});

// 500
app.use(function(req,res,next){
    res.status(500);
    res.render('500: Server error!');
});

// ========================
// ===== START SERVER =====
// ========================

http.listen(port, function(err){
    if(err) {
        console.log(Error('Error: ' + err));
    } else {
        clear();
        console.log(chalk.blue('Canvas Core on port ' + port));
    }
});