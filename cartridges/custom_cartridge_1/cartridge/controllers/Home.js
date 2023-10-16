"use strict";

/**
 * @namespace Home
 */

var server = require("server");
server.extend(module.superModule);
var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');

/**
 * Any  customization on this endpoint, also requires update for Default-Start endpoint AAA
/**
 * Home-Show : This endpoint is called when a shopper navigates to the home page
 * @name Base/Home-Show
 */

server.append(
    "Show",
    userLoggedIn.validateLoggedIn,
 
);



module.exports = server.exports();
