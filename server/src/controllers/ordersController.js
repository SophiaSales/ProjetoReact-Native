const ordersCollection = require("../models/Orders");
const helperService = require("../helpers/validationHelper");
const local = "[Orders controller]";
class Orders {

    async createNewOrder (order) {
        try {
            const orderExists = await this.findOrder(order.orderNumber);
            const orderIsObject = helperService.isObjectNotEmpty(orderExists);
            if (orderIsObject == true) {
                const error = new Error("Order number already exists");
                return error.message;
            }
            return await ordersCollection.create(order);
        } catch (error) {
            console.error(`${error.message}`)
        }
    }

    async findOrder (orderNumber) {
        try {
            return await ordersCollection.findOne({orderNumber: orderNumber});
        } catch (error) {
            console.error(`${local} - Error: `, error);
        }
    }
}

module.exports = new Orders();