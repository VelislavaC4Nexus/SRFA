// Create a function to get product by a given ID
// Create a function to get product category by given product
// Create a function to get different product prices for a given product
// Create a function to get catalog main categories
// Create a function to get customer by ID
// Create a function to check if a given customer is assigned to a given customer group

// Create a function to get product by a given ID
/**
 * @param {dw.catalog.Product} product
 * @returns {String}
 */
function getProductByGivenID(id) {
    product.getID();
}

// Create a function to get product category by given product
/**
 * @param {dw.catalog.Product} product
 * @returns {Collection}
 */
function getProductCategoryByGivenProduct(product) {
    product.getCategories();
}

// Create a function to get different product prices for a given product
/**
 * @param {dw.catalog.Product} product
 * @returns {ProductPriceModel}
 */
function getDifferentProductPricesForGivenProduct(product) {
    product.getPriceModel();
}

// Create a function to get catalog main categories
/**
 * @param {dw.catalog.Catalog} catalog
 * @returns {Object}
 */
function getCatalogMainCategories(catalog) {
    catalog.getRoot()
}

// Create a function to get customer by ID
/**
 * @param {dw.customer.Customer} customer 
 * @returns {String}
 */
function getCustomerByID(customer) {
    customer.getID();
}

// Create a function to check if a given customer is assigned to a given customer group
/**
 * @param {dw.customer.Customer} customer
 * @returns {Boolean} 
 */
function checkIfCustomerIsAssignedToGivenCustomerGroup(customer, groupID) {
    customer.isMemberOfAnyCustomerGroup(groupID)
}