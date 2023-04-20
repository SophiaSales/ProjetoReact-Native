const usersCollection = require("../models/Users");
const local = "[Users controller]";

class Users {

    async createNewUser (user) {

        try {
            return await usersCollection.create(user);
        } catch (error) {
            console.error(`${local} - Error: `, error);
        }
    }

    async findUser (email) {
        try {
            return await usersCollection.findOne({email: email});
        } catch (error) {
            console.error(`${local} - Error: `, error);
        }
    }
}

module.exports = new Users();