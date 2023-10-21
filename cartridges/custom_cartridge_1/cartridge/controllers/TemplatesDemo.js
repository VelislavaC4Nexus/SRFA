var server = require("server");
var cahe = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');


/**
 * @name Base/TemplatesDemo-Show
 * @function
 * @memberof TemplatesDemo
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {middleware} - server.middleware.include
 * @param {renders} -isml
 * @param {serverfunction} - get
 */
server.get('Show', consentTracking.consent, cahe.applyDefaultCache, function (req, res, next) {
    var Site = require('dw/system/Site');
    res.render('template',{welcomeMsg:'Welcome User'});
    next();

}, pageMetaData.computedPageMetaData);

server.get('Include', function (req, res, next) {
    var Site = require('dw/system/Site');
    res.render('includeTemplate',{welcomeMsg:'Welcome User'});
    next();

}, pageMetaData.computedPageMetaData);

module.exports = server.exports();