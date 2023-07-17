/* Simple code, only to provide the service for the application */

var api = require("../api");

module.exports = function (app) {
	app.route("/data").get(api.data);
};
