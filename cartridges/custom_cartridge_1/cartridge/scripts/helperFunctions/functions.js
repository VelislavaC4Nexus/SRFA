/**
 * Create a function to get product by a given ID
 * @param {dw.catalog.Product} product
 * @returns {String}
 */
function getProductByGivenID(id) {
    return product.getID();
}

/**
 * Create a function to get product category by given product
 * @param {dw.catalog.Product} product
 * @returns {Collection}
 */
function getProductCategoryByGivenProduct(product) {
    return product.getCategories();

}

/**
 * Create a function to get different product prices for a given product
 * @param {dw.catalog.Product} product
 * @returns {ProductPriceModel}
 */
function getDifferentProductPricesForGivenProduct(product) {
    return product.getPriceModel();
}

/**
 *  Create a function to get catalog main categories
 * @param {dw.catalog.Catalog} catalog
 * @returns {Collection}
 */
function getCatalogMainCategories() {
    // Returns the catalog of the current site or null if no catalog is assigned to the site.
    var siteCatalog = CatalogMgr.getSiteCatalog();
   
    return siteCatalog.getRoot().getSubCategories();;
}

/**
 * Create a function to get customer by ID
 * @param {dw.customer.Customer} customer 
 * @returns {String}
 */
function getCustomerByID(customer) {
    return customer.getID();
}

/**
 *  Create a function to check if a given customer is assigned to a given customer group
 * @param {dw.customer.Customer} customer
 * @returns {Boolean} 
 */
function checkIfCustomerIsAssignedToGivenCustomerGroup(customer, groupID) {
    return customer.isMemberOfCustomerGroup(groupID);
}