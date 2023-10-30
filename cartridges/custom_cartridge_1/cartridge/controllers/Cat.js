'use strict'

/**
 * @namespace Cat
 */
var server = require('server');
var cache = require("*/cartridge/scripts/middleware/cache");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");

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

        var httpClient = new dw.net.HTTPClient();
        httpClient.open('GET', 'https://catfact.ninja/fact');
        httpClient.send();
        var catFact = JSON.parse(httpClient.text);

        res.render('cat', {
            catFact: catFact
        });

        next();
    },

);

module.exports = server.exports();