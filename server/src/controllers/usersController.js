const usersCollection = require("../models/Users");
const helperService = require("../helpers/validationHelper");
const local = "[USERS-CONTROLLER]";

class Users {

    async createNewUser(user) {
        try {
            const userExists = await this.findUser(user.email);
            const userIsObject = helperService.isObjectNotEmpty(userExists);
            if (userIsObject == true) {
                return { message: "User already exists." }
            }
            return await usersCollection.create(user);
        } catch (error) {
            console.error(`${local} - Error: `, error);
            throw new Error("Failed to create user");
        }
    }

    async findUser(email) {
        try {
            return await usersCollection.findOne({ email: email });
        } catch (error) {
            console.error(`${local} - Error: `, error);
            throw new Error("Failed to find user.");
        }
    }

    async getUsers () {
        try {
            return await usersCollection.find({});
        } catch (error) {
            console.error(`${local} - Error: `, error);
            throw new Error("Failed to return all users.");
        }
    }
}

module.exports = new Users();