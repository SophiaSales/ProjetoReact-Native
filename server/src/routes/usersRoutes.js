const express = require("express");
const usersController = require("../controllers/usersController");
const helperService = require("../helpers/validationHelper");
const router = express.Router();
const local = "[Users routes]";

router.post("/users", async (req, res) => {

    const user = {
        email: req.body.email,
        password: req.body.password,
    }
    try {
        const result = await usersController.createNewUser(user);
        const resultIsObject = helperService.isObjectNotEmpty(result);
        if (resultIsObject == false ) {
            res.status(409).json({message: result});
            return;
        }
        res.status(200).json(result);
        console.log(`${local} - New user created.`);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(`${local} - Error: `, error);
    }
});

router.get("/users", async (req, res) => {
    const email = req.body.email;
    try {
        const result = await usersController.findUser(email);
        const resultIsObject = helperService.isObjectNotEmpty(result);
        if (result == false) {
            res.status(404).send({message: "User not founded."});
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({message: "Internal server error."});
        console.error(`${local} - Error: `, error);
    }
});

module.exports = router;