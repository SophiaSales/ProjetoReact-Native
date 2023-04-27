const express = require("express");
const router = express.Router();
const helperService = require("../helpers/validationHelper");
const usersController = require("../controllers/usersController");
const sessionController = require("../controllers/sessionController");
const local = "[LOGIN-ROUTER]";


router.post("/register", async (req, res) => {
    let user = {
        email: req.body.email,
        password: req.body.password
    }
    try {
        const hashedPassword = await sessionController.hashUserPassword(user.password);
        user.password = hashedPassword;
        const result = await usersController.createNewUser(user);
        const resultNotEmpty = helperService.isObjectNotEmpty(result);
        
        if (result.message) {
            res.status(409).send(result);
            return;
        }

        if (resultNotEmpty == false) {
            res.status(400).send({ message: "Failed trying to create a new user" });
            return;
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: `Internal server error: ${error.message}` });
        console.error(`${local} - Error: `, error);
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await usersController.findUser(email);
        const userNotEmpty = helperService.isObjectNotEmpty(user);
        if (userNotEmpty == false) {
            res.status(401).send({ message: "User not founded." });
            return;
        }

        const isValidPassword = await sessionController.validatePassword(password, user?.password);
        if (isValidPassword == false) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        }

        const secretKey = await sessionController.genereteSecretKey();
        const token = sessionController.genereteToken(user?._id, secretKey);
        if (token == null) {
            res.status(400).send({ message: "Token null" });
            return;
        }

        const tokenIsValid = await sessionController.validateToken(token, secretKey);
        if (!tokenIsValid) {
            res.status(400).send({ message: "Token is not valid" });
            return;
        }

        res.status(200).send({ user, token });
    } catch (error) {
        res.status(500).send({message: `Internal server error: ${error.message}`});
        console.error(`${local} - Error: `, error);
    }
});

module.exports = router;