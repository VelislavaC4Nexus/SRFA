"use strict";

/**
 * @namespace LoggedOrGuestUser
 */

var server = require("server");
var cache = require("*/cartridge/scripts/middleware/cache");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
var pageMetaData = require("*/cartridge/scripts/middleware/pageMetaData");
/**
 * 
/**
 * @name Base/LoggedOrGuestUser-Show
 * @function
 * @memberof LoggedOrGuestUser
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.get(
    "Show",
    consentTracking.consent,
    cache.applyDefaultCache,
    function (req, res, next) {
        var Site = require("dw/system/Site");
        var PageMgr = require("dw/experience/PageMgr");
        var pageMetaHelper = require("*/cartridge/scripts/helpers/pageMetaHelper");
        var ContentMgr = require('dw/content/ContentMgr');

        pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);

        var currentCustomer =req.currentCustomer.profile;

        res.render('loggedOrGuest', { ContentMgr, currentCustomer });
     
        next();
    },
    pageMetaData.computedPageMetaData

);

module.exports = server.exports();
