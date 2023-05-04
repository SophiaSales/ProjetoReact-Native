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
}

module.exports = new UsersAPI();