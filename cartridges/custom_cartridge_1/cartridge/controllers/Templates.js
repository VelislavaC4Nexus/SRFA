var server = require("server");
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');


/**
 * @name Base/Templates-Show
 * @function
 * @memberof Templates
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {middleware} - server.middleware.include
 * @param {renders} -isml
 * @param {serverfunction} - get
 */
server.get('Show',
    consentTracking.consent,
    cache.applyDefaultCache,
    function (req, res, next) {
        var Site = require('dw/system/Site');
        res.render('template', { welcomeMsg: 'Welcome User' });
        next();

    }, pageMetaData.computedPageMetaData);

server.get('Include', function (req, res, next) {
    var Site = require('dw/system/Site');
    res.render('includeTemplate', { welcomeMsg: 'Welcome User' });
    next();

}, pageMetaData.computedPageMetaData);

/**
 * @name Base/Templates-Session
 * @function
 * @memberof Templates
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {middleware} - server.middleware.include
 * @param {renders} - isml
 * @param {serverfunction} = get
 */
server.get('Session',
    consentTracking.consent,
    cache.applyDefaultCache,
    function (req, res, next) {
        var Site = require('dw/system/Site');
        res.render('templateTaskSession');
        next();

    }, pageMetaData.computedPageMetaData);

module.exports = server.exports();