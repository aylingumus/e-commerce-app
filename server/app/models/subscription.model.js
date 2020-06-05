const sql = require("./db.js");

// constructor
const Subscription = function(subscription) {
  this.subscriptionId = subscription.subscriptionId;
  this.fullName = subscription.fullName;
  this.address = subscription.address;
  this.locationName = subscription.locationName;
  this.subCityName = subscription.subCityName;
  this.cityName = subscription.cityName;
  this.brand = subscription.brand;
  this.phoneNumber = subscription.phoneNumber;
  this.distributorNumber = subscription.distributorNumber;
};

Subscription.findCustomerInfoByPhoneNumber = (phoneNumber, result) => {
  sql.query(`SELECT * FROM subscription WHERE phoneNumber = ${phoneNumber}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found subscriptions: ", res);
      result(null, res);
      return;
    }

    // not found any subscriptions with the phone number
    result({ kind: "not_found" }, null);
  });
};

Subscription.findOrdersBySubscriptionId = (subscriptionId, result) => {
  sql.query(`SELECT * FROM orders WHERE subscriptionId = ${subscriptionId};
            SELECT o.orderId, p.productName, p.quantity 
            FROM orders o
            INNER JOIN order_products op
            ON op.orderId = o.orderId
            INNER JOIN products p
            ON p.productId = op.productId`, [1, 2], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    var resOrders = res[0];
    var resProducts = res[1];

    if (resOrders.length) {
      // we add ordered products into orders
      resOrders.forEach(o => {
        var products = [];
        resProducts.forEach(p => {
          if (o.orderId === p.orderId) {
            var product = {};
            product.productName = p.productName;
            product.quantity = p.quantity;
            products.push(product);
          }
        });
        o["products"] = products;
      });

      result(null, resOrders);
      return;
    }

    // not found any orders with the subscription id
    result({ kind: "not_found" }, null);
  });
};

module.exports = Subscription;