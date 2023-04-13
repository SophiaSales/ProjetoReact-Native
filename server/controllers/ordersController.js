const ordersCollection = require("../models/Orders");
const local = "[Orders controller]";
class Orders {

    async createNewOrder (order) {
        try {
            return await ordersCollection.create(order);
        } catch (error) {
            console.error(`${local} - Error: `, error);
        }
    }
}

module.exports = new Orders();