const axios = require("axios");
const local = "[API-USERS]";

class UsersAPI {

    async getUsers() {
        try {
            return await axios.get("http://localhost:3000/users");
        } catch (error) {
            console.error(`${local} - Error: `, error.message);
        }
    }

    async login(user) {
        try {
            return await axios.post("http://localhost:3000/login", user, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
        } catch (error) {
            console.error(`${local} - Error: `, error.message);
            throw error;
        }
    }
}

module.exports = new UsersAPI();