const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const local = "[SESSION-CONTROLLER]"

class Session {

    genereteSecretKey = async () => {
        try {
            return crypto.randomBytes(64).toString("hex");
        } catch (error) {
            console.error(`${local} - Failed trying to create secret key: `, error);
        }
    }

    genereteToken = (userID, secretKey) => {
        try {
            return jwt.sign({ userID: userID }, secretKey);
        } catch (error) {
            console.error(`${local} - Failed trying go create token: `, error);
        }
    }

    validatePassword = async (passwordTyped, userPassword) => {
        try {
            const isValidPassword = await bcrypt.compare(passwordTyped, userPassword);
            return isValidPassword;
        } catch (error) {
            console.error(`${local} - Failed trying to validate password: `, error);
        }
    }

    hashUserPassword = async (password) => {
        try {
            return await bcrypt.hash(password, 10);
        } catch (error) {
            console.error(`${local} - Failed trying to hash user password: `, error);
        }
    }

    validateToken = async (token, secretKey) => {
        try {
            return jwt.verify(token, secretKey);
        } catch (error) {
            console.error(`${local} - Failed trying to validate token: `, error);
        }
    }
}

module.exports = new Session();