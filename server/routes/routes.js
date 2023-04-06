const express = require("express");
const router = express.Router();
const local = "[Routes]";

router.get("/orders", (req, res) => {
    const orders = [
        {orderNumber: 1, items:["coca-cola", "coxinha"]},
        {orderNumber: 2, items:["fanta-laranha", "pastel"]},
    ];

    try {
        res.status(200).json(orders);
    } catch (error) {
        console.error(`${local} - Error: `, error);
    }
});

module.exports = router;