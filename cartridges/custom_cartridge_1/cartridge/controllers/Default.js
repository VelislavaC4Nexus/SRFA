"use strict";

/**
 * @namespace Default
 */

var server = require("server");
server.extend(module.superModule);
var userLoggedIn = require("*/cartridge/scripts/middleware/userLoggedIn");

/** when sitepath is defined in the site aliases from business manager, homepage will be rendered directly */
/**
 * Default-Start : This end point is the root of the site, when opening from the BM this is the end point executed
 * @name Base/Default-Start
 */
server.append(
    "Start",
 
)
    

module.exports = server.exports();
