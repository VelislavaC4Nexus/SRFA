'use strict'

var server = require('server');
/**
 * Show example A
 */
server.get('ShowA', function(req,res,next){
    res.render('exampleA');
    next();
});

/**
 * Show example B
 */
server.get('ShowB', function(req,res,next){
    res.render('exampleB');
    next();
});
module.exports=server.exports();