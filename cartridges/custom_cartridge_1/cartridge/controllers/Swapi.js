'use strict'

/**
 *@namespace Swapi
 */
var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
var swapiService = require("*/cartridge/scripts/swapiService");

/**
 * Cat-Facts: Used to retrieve a cat fact.
 * @name Swapi-DeathStar
 * @function
 * @memberof Swapi
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */

server.get(
    "DeathStar",
    consentTracking.consent,
    cache.applyDefaultCache,
    function (req, res, next) {

        var deathStar = JSON.parse(swapiService.getDeathStar());

        res.render('deathStar', {
            deathStar: deathStar
        });
        next();
    },
);
module.exports = server.exports();