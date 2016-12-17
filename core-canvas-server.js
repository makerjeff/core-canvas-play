/**
 * Trump Love Server
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

// =========================
// CONFIGURATION ===========
// =========================

const port              = process.env.PORT || 3000;


// ====================
// MIDDLEWARE =========
// ====================


// --- basic logger ---
// TODO: switch to Morgan, or encapsulate into module
app.use(function(req,res,next){
    console.log(new Date() + ' ' + req.method + ' ' + req.url + ' ');

    if(req.body.password) {
        console.log(' ----- Attempted password: ' + req.body.password);
    }
    
    next();
});

// ==================
// ROUTES ===========
// ==================



// TEMP ROUTES
app.get('/', function(req, res){
    res.cookie('lgna', 0, {signed:true});
    res.render('login', {layout: 'super.handlebars'});
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
        console.log(chalk.green('Making America great again on port ' + port));
        console.log(chalk.black.bgYellow(' Sever version: ' + serverVersion + ' '));

        // -- TEST --
        console.log(sdb.credentials);
        console.log('Token lifespan: ' + tokenLifespan);
    }
});