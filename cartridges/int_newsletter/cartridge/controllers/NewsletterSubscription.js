'use strict';

/**
 * @namespace Account
 */

var server = require('server');

var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

/**
 * Newsletter-Show : The Newsletter-Show endpoint renders the page that allows a user to submit a newsletter.
 * @name Base/NewsletterSubscription-Show
 * @function
 * @memberof NewsletterSubscription
 * @param {middleware} - server.middleware.https
 * @param {middleware} - csrfProtection.generateToken
 * @param {middleware} - consentTracking.consent
 * @param {category} - sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.get(
    'Show',
    server.middleware.https,
    csrfProtection.generateToken,
    consentTracking.consent,
    function (req, res, next) {

        var newsletterForm = server.forms.getForm('newsletter');
        newsletterForm.clear();

        res.render('newsletter', {
            newsletterForm: newsletterForm
        });

        next();
    }
);

/**
 * Newsletter-Save : The Newsletter-Save endpoint
 * @name Base/NewsletterSubscription-Save
 * @function
 * @memberof NewsletterSubscription
 * @param {middleware} - server.middleware.https
 * @param {middleware} - csrfProtection.validateAjaxRequest
 * @param {httpparameter} - dwfrm_profile_customer_firstname - Input field for the user's first name
 * @param {httpparameter} - dwfrm_profile_customer_lastname - Input field for the user's last name
 * @param {httpparameter} - dwfrm_profile_customer_email - Input field for the user's email address
 * @param {httpparameter} - dwfrm_profile_customer_gender - Input field for the user's gender
 * @param {httpparameter} - csrf_token - hidden input field CSRF token
 * @param {category} - sensititve
 * @param {returns} - json
 * @param {serverfunction} - post
 */
server.post(
    'Save',
    server.middleware.https,
    csrfProtection.validateAjaxRequest,
    function (req, res, next) {
        var CustomObjectMgr = require('dw/object/CustomObjectMgr');
        var Resource = require('dw/web/Resource');
        var Transaction = require('dw/system/Transaction');
        var URLUtils = require('dw/web/URLUtils');
        var UUIDUtils = require('dw/util/UUIDUtils');
        var newsletterForm = server.forms.getForm('newsletter');

        var type = 'NEWSLETTER_SUBSCRIPTION_CO_HW';
        var keyValue = UUIDUtils.createUUID();

        var newsletterResult = CustomObjectMgr.getCustomObject(type, keyValue);
        if (!empty(newsletterResult)) {
            newsletterForm.valid = false;
            newsletterForm.email.valid = false;
            newsLetterForm.email.error = Resource.msg('error.message.not.unique', 'forms', null)
        }
        if (newsletterForm.valid) {
            Transaction.wrap(function () {
                var newsletterEntry = CustomObjectMgr.createCustomObject(type, keyValue);
                newsletterEntry.custom.email = newsletterForm.email.htmlValue;
                newsletterEntry.custom.firstname = newsletterForm.firstname.htmlValue;
                newsletterEntry.custom.lastname = newsletterForm.lastname.htmlValue;
                newsletterEntry.custom.gender = newsletterForm.gender.htmlValue;
            });
        }

        res.json({
            success: true,
            redirectUrl: URLUtils.url('NewsletterSubscription-Show').toString()
        });

        return next();
    }
);

module.exports = server.exports();