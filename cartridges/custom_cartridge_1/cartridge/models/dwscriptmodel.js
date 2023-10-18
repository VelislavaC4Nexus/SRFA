'use strict'
/**
 * 
 * @param {dw.customer.Customer} customer 
 * @returns {String} customerID
 */

function getCustomerID(customer) {
    return customer.getID();
}
/**
 * @constructor
 */
function dwScriptModel(customer) {

    //constructor
    this.ID = getCustomerID(customer);
    this.name = getCustomerByToken(customer);


}

module.export = dwScriptModel;