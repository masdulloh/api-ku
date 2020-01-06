const request = require('request');

module.exports = {
    cekCost: (data, callback) => {
        let myJSONObject = {
            origin: data.origin,
            destination: data.destination,
            weight: data.weight,
            courier: data.courier
        };
        request({
            url: "https://api.rajaongkir.com/starter/cost",
            method: "POST",
            json: true, 
            headers:{
                key:'9f090c76ad70b3f731a2696b8e47ba42'
            },
            body: myJSONObject
        }, function (error, response, body) {
            return callback(null, response);
        });
    },
    mootaProfile: callback => {
        request({
            url: "https://app.moota.co/api/v1/profile",
            method: "GET",
            json: true, 
            headers:{
                Accept: 'application/json',
                Authorization: 'Bearer RYtjp4aM2hbEYz6PQm3xJMX8dfUUpZOgXizmmK9p2k30T9PJwT'
            }
        }, function (error, response, body) {
            return callback(null, response);
        });
    }
}