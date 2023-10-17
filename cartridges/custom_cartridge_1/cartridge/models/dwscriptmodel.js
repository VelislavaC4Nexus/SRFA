'use strict'
/**
 * 
 * @param {dw.customer.Customer} customer 
 * @returns {String} customerID
 */

function getCustomerID(customer){
    return customer.getID();
}

function DWScriptModel(customer){
    this.ID=getCustomerID(customer);
}

module.export=DWScriptModel;