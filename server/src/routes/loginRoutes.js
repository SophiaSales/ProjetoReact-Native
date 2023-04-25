const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const local = "[LOGIN-ROUTES]";

router.post("/login", async (req, res) => {
    const { email, login } = req.body;
    try {
        const user = await usersController.findUser(email);
        console.log(`${local} - User founded: `, user);
        res.status(200).json(user);
    } catch (error) {
        console.error(`${local} - Error: `, error.message);
    }
});

module.exports = router;