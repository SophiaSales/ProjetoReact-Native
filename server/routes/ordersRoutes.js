const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");
const local = "[Routes]";

router.post("/orders", async (req, res) => {
    const order = {
        orderNumber: req.body.orderNumber,
        orderOwner: req.body.orderOwner,
        orderItems: req.body.orderItems
    }
    try {
        const result = await ordersController.createNewOrder(order);
        res.status(200).json(result);
        console.log("New order created");
    } catch (error) {
        res.status(500);
        console.error(`${local} - Error: `, error);
    }
});

module.exports = router;