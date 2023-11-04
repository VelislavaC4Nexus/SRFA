'use strict'

/**
 * @namespace Cat
 */
var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
var catFactService = require("*/cartridge/scripts/catFactService");

/**
 * Cat-Facts: Used to retrieve a cat fact.
 * @name Cat-Fact
 * @function
 * @memberof Cat
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {dw.net.HTTPClient} client - HTTPClient class instance of the current service
 * @param {serverfunction} - get
 */

server.get(
    "Fact",
    consentTracking.consent,
    cache.applyDefaultCache,
    function (req, res, next) {

        var catFact = JSON.parse(catFactService.getCatFact());

        res.render('cat', {
            catFact: catFact
        });
        next();
    },
);
module.exports = server.exports();