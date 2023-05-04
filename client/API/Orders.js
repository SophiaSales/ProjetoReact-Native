const axios = require("axios");
const local = "[API-ORDERS]";

class OrdersAPI {

    async getOrders() {
        try {
            return await axios.get("http://localhost:3000/orders");
        } catch (error) {
            console.error(`${local} - Error: `, error.message);
        }
    }
}

module.exports = new OrdersAPI();