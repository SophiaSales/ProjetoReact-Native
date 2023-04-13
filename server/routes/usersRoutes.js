const express = require("express");
const router = express.Router();
const local = "[Users routes]";

router.post("/users", async (req, res) => {

    const user = {
        email: req.body.email,
        password: req.body.password,
    }
    try {
        const result = await usersController.createNewUser(user);
        res.status(200).json(result);
    } catch (error) {
        res.status(500);
        console.error(`${local} - Error: `, error);
    }
});

router.get("/users", async (req, res) => {
    const email = req.body.email;
    try {
        const result = await usersController.findUser(email);
        res.status(200).json(result);
    } catch (error) {
        res.status(500);
        console.error(`${local} - Error: `, error);
    }
});

module.exports = router;