"use strict";
/**
 * @namespace AssetsAndSlots
 */

var server = require("server");
var cache = require("*/cartridge/scripts/middleware/cache");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
var pageMetaData = require("*/cartridge/scripts/middleware/pageMetaData");

/**
 * @name Base/AssetsAndSlots-Slot
 * @function
 * @memberof AssetsAndSlots
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.get(
    "Slot",
    consentTracking.consent,
    cache.applyDefaultCache,
    function (req, res, next) {
        var Site = require("dw/system/Site");
        var pageMetaHelper = require("*/cartridge/scripts/helpers/pageMetaHelper");

        pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);

        res.render("slotTemplate");

        next();
    },
    pageMetaData.computedPageMetaData
);

/**
 * @name Base/AssetsAndSlots-Assets
 * @function
 * @memberof AssetsAndSlots
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.get(
    "Assets",
    consentTracking.consent,
    cache.applyDefaultCache,
    function (req, res, next) {
        var Site = require("dw/system/Site");
        var PageMgr = require("dw/experience/PageMgr");
        var pageMetaHelper = require("*/cartridge/scripts/helpers/pageMetaHelper");
        var ContentMgr = require('dw/content/ContentMgr');

        pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);

        var currentCustomer = req.currentCustomer.profile;
        var messageLoogedOrGuest;

        if (currentCustomer) {
            var loggedInAsset = ContentMgr.getContent('Logged');
            var loggedInAssetBody = loggedInAsset ? loggedInAsset.custom.body : '';
            var customerName = currentCustomer.firstName;
            var loggedInAssetBodyAsString = loggedInAssetBody.toString();
            messageLoogedOrGuest = loggedInAssetBodyAsString.replace("{0}", customerName);
        } else {
            var guestAsset = ContentMgr.getContent('Guest');
            var guestAssetBody = guestAsset ? guestAsset.custom.body : '';
            messageLoogedOrGuest = guestAssetBody;
        }

        res.render('loggedOrGuest', { messageLoogedOrGuest });

        next();
    },
    pageMetaData.computedPageMetaData
);

module.exports = server.exports();