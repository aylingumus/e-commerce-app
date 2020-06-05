const Subscription = require("../models/subscription.model.js");

// Retrieve the customer infos with phoneNumber
exports.findCustomerInfo = (req, res) => {
	Subscription.findCustomerInfoByPhoneNumber(req.params.phoneNumber, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).send({
					message: "Belirtilen telefona ait kayıt bulunamamıştır."
				});
			} else {
				res.status(500).send({
					message: "Sunucu hatası. Lütfen tekrar deneyin."
				});
			}
		} else res.send(data);
	});
};

// Retrieve the orders with subscriptionId
exports.findOrders = (req, res) => {
	ordersList = Subscription.findOrdersBySubscriptionId(req.params.subscriptionId, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).send({
					message: "Belirtilen aboneliğe ait kayıt bulunamamıştır."
				});
			} else {
				res.status(500).send({
					message: "Sunucu hatası. Lütfen tekrar deneyin."
				});
			}
		} else res.send(data);
	});
};