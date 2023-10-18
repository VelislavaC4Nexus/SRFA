// "use strict";

// /**
//  * @namespace Home
//  */

// var server = require("server");
// server.extend(module.superModule)
// // var cache = require("*/cartridge/scripts/middleware/cache");
// // var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
// var pageMetaData = require("*/cartridge/scripts/middleware/pageMetaData");

// // var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');

// /**
//  * Any  customization on this endpoint, also requires update for Default-Start endpoint AAA
// /**
//  * Home-Show : This endpoint is called when a shopper navigates to the home page
//  * @name Base/Home-Show
//  * @function
//  * @memberof Home
//  * @param {middleware} - consentTracking.consent
//  * @param {middleware} - cache.applyDefaultCache
//  * @param {category} - non-sensitive
//  * @param {renders} - isml

//  */
// server.append(
//     "Show",
//     // userLoggedIn.validateLoggedIn,
//     // consentTracking.consent,
//     // cache.applyDefaultCache,
//     function (req, res, next) {
//         var Site = require("dw/system/Site");
//         var PageMgr = require("dw/experience/PageMgr");
//         var pageMetaHelper = require("*/cartridge/scripts/helpers/pageMetaHelper");
//         // var URLUtils = require('dw/web/URLUtils');

//         pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);

//         var page = PageMgr.getPage("homepage");


//         if (page && page.isVisible()) {
//             res.page("homepage");
//         } else {
//             res.json({msg: "aaa"})


//             // res.render('contactUs/contactUs.isml', {
//             //     actionUrl: URLUtils.url('ContactUs-Subscribe').toString()
//             // });

//         }
//         next();

//     },
//     pageMetaData.computedPageMetaData

// );



// module.exports = server.exports();


"use strict";

var server = require("server");
var HookMgr = require("dw/system/HookMgr");

server.extend(module.superModule);

server.append("Show", function (req, res, next) {

    let viewData = res.getViewData();



    if (HookMgr.hasHook("app.home.calculate")) {
        HookMgr.callHook("app.home.calculate", "calculatePrice", viewData);
     
    }
    res.json({ msg: viewData })
    // res.setViewData(viewData);

    next();
});

module.exports = server.exports();