"use strict";

/**
 * @namespace DWScriptDemo
 */

var server = require("server");
var cache = require("*/cartridge/scripts/middleware/cache");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
var pageMetaData = require("*/cartridge/scripts/middleware/pageMetaData");
var DWScriptModel = require("*/cartridge/models/dwscriptmodel")
// var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');

/**
 * Any AAA customization on this endpoint, also requires update for Default-Start endpoint AAA
/**
 * DWScriptDemo-Show : This endpoint is called when we have DWScript Demo
 * @function
 * @memberof DWScriptDemo
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.get(
    "Show",
    // userLoggedIn.validateLoggedIn,
    consentTracking.consent,
    cache.applyDefaultCache,
    function (req, res, next) {
        var Site = require("dw/system/Site");
     
        var pageMetaHelper = require("*/cartridge/scripts/helpers/pageMetaHelper");

        pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);

        let dwScriptModel= new DWScriptModel(customer)

     
            res.render("dwscriptdemo", dwScriptModel);
      
        next();
    },
    pageMetaData.computedPageMetaData
    
);



module.exports = server.exports();