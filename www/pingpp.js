/**
 * ping++, cordova, module
 * Author: Tong Chia
 * License: Apache License 2.0
 * */

module.exports = {
    /**
     * @param {object|string} charge
     * @param {Function} successCallback ['success']
     * @param {Function} errorCallback ['fail'|'cancel'|'invalid']
     */
    createPayment: function (charge, successCallback, errorCallback) {
         if (typeof charge === 'object') { charge = JSON.stringify(charge); }
         cordova.exec(successCallback, errorCallback, "PingppPlugin", "createPayment", [charge]);
    }
};
