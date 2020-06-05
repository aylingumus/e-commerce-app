module.exports = app => {
	const subscriptions = require("../controllers/subscription.controller.js");

	// Retrieve the customer infos with phoneNumber
	app.get("/getCustomerInfo/:phoneNumber", subscriptions.findCustomerInfo);

	// Retrieve the subscription orders info with subscriptionId
	app.get("/getSubscriptionOrders/:subscriptionId", subscriptions.findOrders);

};