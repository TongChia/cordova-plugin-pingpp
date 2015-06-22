/*global cordova, module*/

module.exports = {
    /**
     * @param charge
     * @param successCallback ['success']
     * @param errorCallback ['fail'|'cancel'|'invalid']
     */
    createPayment: function (charge, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "PingppPlugin", "createPayment", [JSON.stringify(charge)]);
    }
};
