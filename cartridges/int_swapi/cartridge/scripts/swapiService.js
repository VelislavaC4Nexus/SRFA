'use strict'

function getDeathStar() {
    var getSwapiService = dw.svc.LocalServiceRegistry.createService("http.swapi.getdeathstar", {
        createRequest: function (svc, args) {
            svc.setRequestMethod("GET");
            return args;
        },
        parseResponse: function (svc, client) {
            return client.text;
        },
        filterLogMessage: function (msg) {

            return msg.replace(/"cost_in_credits":"\d+"/,"cost_in_credits:$$$$$$$$$$$$$$$$$$$");
        }
    });
    var response = getSwapiService.call().object;
    
    return response;
}
module.exports = {
    getDeathStar: getDeathStar
};