// "use strict";

// /**
//  * @namespace Demo
//  */

// var server = require("server");
// var cache = require("*/cartridge/scripts/middleware/cache");
// var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
// var pageMetaData = require("*/cartridge/scripts/middleware/pageMetaData");
// var dwScriptModel = require("*/cartridge/models/dwScriptModel");
// // var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');

// /**
//  * Any AAA customization on this endpoint, also requires update for Default-Start endpoint AAA
// /**
//  * DWScriptDemo-Show : This endpoint is called when we have DWScript Demo
//  * @function
//  * @memberof Demo
//  * @param {middleware} - consentTracking.consent
//  * @param {middleware} - cache.applyDefaultCache
//  * @param {category} - non-sensitive
//  * @param {renders} - isml
//  *
//  */
// server.get(
//     "Show",
//     // userLoggedIn.validateLoggedIn,
//     consentTracking.consent,
//     cache.applyDefaultCache,
//     function (req, res, next) {
//         var Site = require("dw/system/Site");

//         var pageMetaHelper = require("*/cartridge/scripts/helpers/pageMetaHelper");

//         pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);

//         // var dwScriptModel ={customerID: "sajdhasudh", customerName: "AAAA"}


//         res.render("dwscriptdemo",);
//         //TypeError: [object Object] is not a function, it is object. (custom_cartridge_1/cartridge/controllers/DWScriptDemo.js#38)
            
//         next();
//     },
//     pageMetaData.computedPageMetaData

// );



// module.exports = server.exports();

"use strict";

/**
 * @namespace DWScriptDemo
 */

var server = require("server");
var cache = require("*/cartridge/scripts/middleware/cache");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
var pageMetaData = require("*/cartridge/scripts/middleware/pageMetaData");
// const DwModel = require("*/cartridge/models/dwScript");

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
        let dwScriptModel = {name: "AAA", id:"123",age:"23"}

        pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);

        res.render("dwScriptDemo",dwScriptModel);
        next();
    },
    pageMetaData.computedPageMetaData
);



module.exports = server.exports();