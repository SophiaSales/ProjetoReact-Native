const usersAPI = require("./Users");
const ordersAPI = require("./Orders");
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

const signIN = async () => {
    try {
        const user = {
            email: "wilman817@gmail.com",
            password: "BANANAbanana@#2023",
        }
        const response = await usersAPI.login(user);
        console.log("User login result: ", response.data);
    } catch (error) {
        console.error(`${local} - Error: `, error.message);
    }
}

const main = async () => {
    try {
        await signIN();
    } catch (error) {
        console.error(`${local} - Failed on main function: `, error.message);
    }
}

main();