function calculatePrice( viewData) {
    
    viewData.totalPrice = getTotalPrice(5,5);
    return viewData;
}
function getTotalPrice(quantity,price){
    return  quantity * price;
}

module.exports = {
    calculatePrice
};