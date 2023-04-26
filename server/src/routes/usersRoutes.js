const express = require("express");
const usersController = require("../controllers/usersController");
const helperService = require("../helpers/validationHelper");
const router = express.Router();
const local = "[USERS-ROUTER]";

router.get("/user/:userEmail", async (req, res) => {
    const email = req.params.userEmail;
    try {
        const result = await usersController.findUser(email);
        const resultIsObject = helperService.isObjectNotEmpty(result);
        if (resultIsObject == false) {
            res.status(404).send({message: "User not founded."});
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({message: "Internal server error."});
        console.error(`${local} - Error: `, error);
    }
});

router.get("/users", async (req, res) => {
    try {
        const result  = await usersController.getUsers();
        const resultIsArray = helperService.isArrayNotEmpty(result);
        if (resultIsArray == false) {
            res.status(404).send({ message: "users not founded" });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error(`${local} - Error: `, error);
        res.status(500).send({ message: "Internal server error." });
    }
});

module.exports = router;