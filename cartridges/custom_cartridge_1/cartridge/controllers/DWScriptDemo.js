"use strict";

/**
 * @namespace DWScriptDemo
 */

var server = require("server");
var cache = require("*/cartridge/scripts/middleware/cache");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
var pageMetaData = require("*/cartridge/scripts/middleware/pageMetaData");

/**
 * Any customization on this endpoint, also requiresss update for Default-Start endpoint
 */
/**
 * @function
 * @memberof DwScriptDemo
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
        var pageMetaHelper = require("*/cartridge/scripts/helpers/pageMetaHelper");
        let dwScriptModel = { name: "AAA", id: "123", age: "23" }

        pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);

        res.render("dwScriptDemo", dwScriptModel);

        next();
    },
    pageMetaData.computedPageMetaData
);

/**
 * @function
 * @memberof DWScriptDemo
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.get(
    "AccountModel",
    consentTracking.consent,
    cache.applyDefaultCache,
    function (req, res, next) {
        var Site = require("dw/system/Site");
        var pageMetaHelper = require("*/cartridge/scripts/helpers/pageMetaHelper");
        pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);

        var AccountModel = require('*/cartridge/models/account');
        var currentCustomer = req.currentCustomer.profile; 
        var customer;
        if (currentCustomer) {
            customer = new AccountModel(req.currentCustomer);
            customer.customerFavouriteGame = 'Heroes of Might and Magic III'
        } else {
            customer = { customerFavouriteGame: 'Heroes of Might and Magic III' }
        }

        res.json({
            customer
        });

        next();
    },
    pageMetaData.computedPageMetaData
);

module.exports = server.exports();