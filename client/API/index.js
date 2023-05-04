const usersAPI = require("./users");
const ordersAPI = require("./orders");
const local = "[API-MAIN]";

const getUsers = async () => {
    try {
        const response = await usersAPI.getUsers();
        console.log(`${local} - Users founded: `, response.data);
    } catch (error) {
        console.error(`${local} - Error: `, error.message);
    }
}

const getOrders = async () => {
    try {
        const response = await ordersAPI.getOrders();
        console.log(`${local} - Orders founded: `, response.data);
    } catch (error) {
        console.error(`${local} - Error: `, error.message);
    }
}

const main = async () => {
    try {
        await getUsers();
        await getOrders();
    } catch (error) {
        console.error(`${local} - Failed on main function: `, error.message);
    }
}

main();