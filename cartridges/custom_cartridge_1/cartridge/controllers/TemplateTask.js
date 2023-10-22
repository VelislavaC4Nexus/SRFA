var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');

/**
 * @name Base/TemplateTask-Show
 * @function
 * @memberof TemplateTask
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {middleware} - server.middleware.include
 * @param {renders} - isml
 * @param {serverfunction} = get
 */
server.get('Show', consentTracking.consent, cache.applyDefaultCache, function (req, res, next) {
    var Site = require('dw/system/Site');
    res.render('templateTask');
    next();

}, pageMetaData.computedPageMetaData);

module.exports = server.exports();