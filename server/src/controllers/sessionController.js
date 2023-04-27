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
            throw new Error("Failed to create secret key.");
        }
    }

    genereteToken = (userID, secretKey) => {
        try {
            return jwt.sign({ userID: userID }, secretKey);
        } catch (error) {
            console.error(`${local} - Failed trying go create token: `, error);
            throw new Error("Failed to create token.");
        }
    }

    validatePassword = async (passwordTyped, userPassword) => {
        try {
            const isValidPassword = await bcrypt.compare(passwordTyped, userPassword);
            return isValidPassword;
        } catch (error) {
            console.error(`${local} - Failed trying to validate password: `, error);
            throw new Error("Failed to validate password")
        }
    }

    hashUserPassword = async (password) => {
        try {
            return await bcrypt.hash(password, 10);
        } catch (error) {
            console.error(`${local} - Failed trying to hash user password: `, error);
            throw new Error("Failed to hash password.");
        }
    }

    validateToken = async (token, secretKey) => {
        try {
            return jwt.verify(token, secretKey);
        } catch (error) {
            console.error(`${local} - Failed trying to validate token: `, error);
            throw new Error("Failed to validate token.");
        }
    }
}

module.exports = new Session();