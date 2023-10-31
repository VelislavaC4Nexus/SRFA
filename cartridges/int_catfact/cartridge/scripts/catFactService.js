'use strict'

function getCatFact() {
    var getCatFactService = dw.svc.LocalServiceRegistry.createService("http.catfact.getcatfact", {
        createRequest: function (svc, args) {
            svc.setRequestMethod("GET");
            return args;
        },
        parseResponse: function (svc, client) {
            return client.text;
        }
    });

    var response = getCatFactService.call().object;

    return response;
}

module.exports = {
    getCatFact: getCatFact
};