const usersCollection = require("../models/Users");
const helperService = require("../helpers/validationHelper");
const local = "[Users controller]";

class Users {

    async createNewUser(user) {
        try {
            const userExists = await this.findUser(user.email);
            const userIsObject = helperService.isObjectNotEmpty(userExists);
            if (userIsObject == true) {
                const error = new Error("User already exists.");
                return error.message;
            }
            return await usersCollection.create(user);
        } catch (error) {
            console.error(`${local} - Error: `, error);
        }
    }

    async findUser(email) {
        try {
            return await usersCollection.findOne({ email: email });
        } catch (error) {
            console.error(`${local} - Error: `, error);
        }
    }

    async getUsers () {
        try {
            return await usersCollection.find({});
        } catch (error) {
            console.error(`${local} - Error: `, error)
        }
    }
}

module.exports = new Users();