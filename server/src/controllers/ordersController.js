const ordersCollection = require("../models/Orders");
const helperService = require("../helpers/validationHelper");
const local = "[ORDERS-CONTROLLER]";
class Orders {

    async createNewOrder (order) {
        try {
            const orderExists = await this.findOrder(order.orderNumber);
            const orderIsObject = helperService.isObjectNotEmpty(orderExists);
            if (orderIsObject == true) {
                return { message: "Order already exists" };
            }
            return await ordersCollection.create(order);
        } catch (error) {
            console.error(`${error.message}`);
            throw new Error("Failed to create a new order.");
        }
    }

    async findOrder (orderNumber) {
        try {
            return await ordersCollection.findOne({orderNumber: orderNumber});
        } catch (error) {
            console.error(`${local} - Error: `, error);
            throw new Error("Failed to find order.");
        }
    }

    async getOrders () {
        try {
            return await ordersCollection.find({});
        } catch (error) {
            console.error(`${local} - Error: `, error.message);
            throw new Error("Failed to get orders.");
        }
    }
}

module.exports = new Orders();