"use strict";

/**
 * @namespace Home
 */

var server = require("server");
server.extend(module.superModule);
var cache = require("*/cartridge/scripts/middleware/cache");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
var pageMetaData = require("*/cartridge/scripts/middleware/pageMetaData");
var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');

/**
 * Any AAA customization on this endpoint, also requires update for Default-Start endpoint AAA
/**
 * Home-Show : This endpoint is called when a shopper navigates to the home page
 * @name Base/Home-Show
 * @function
 * @memberof Home
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */

server.append(
    "Show",
    userLoggedIn.validateLoggedIn,
 
);



module.exports = server.exports();
