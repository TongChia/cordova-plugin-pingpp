/**
 * ping++, cordova, module
 * Author: Tong Chia
 * License: Apache License 2.0
 * */

module.exports = {
    /**
     * @param {object|string} charge (JSON string or object)
     * @param {Function} successCallback ['success']
     * @param {Function} errorCallback ['fail'|'cancel'|'invalid']
     */
    createPayment: function (charge, successCallback, errorCallback) {
        if (typeof charge === 'string') { JSON.parse(charge); }
        if (charge.object === 'charge') {
            cordova.exec(successCallback, errorCallback, "PingppPlugin", "createPayment", [JSON.stringify(charge)]);
        } else {
            return errorCallback('wrong charge object');
        }
    }
};
