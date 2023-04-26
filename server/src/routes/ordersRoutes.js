const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");
const helperService = require("../helpers/validationHelper");
const local = "[ORDERS-ROUTER]";

router.post("/orders", async (req, res) => {
    const order = {
        orderNumber: req.body.orderNumber,
        orderOwner: req.body.orderOwner,
        orderItems: req.body.orderItems
    }
    try {
        const result = await ordersController.createNewOrder(order);
        const resultIsObject = helperService.isObjectNotEmpty(result);
        if (resultIsObject == false) {
            res.status(409).json({message: result});
            return;
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({message: "Internal server error."});
        console.error(`${local} - Error: `, error.message);
    }
});

router.get("/orders/orderNumber", async (req, res) => {
    const orderNumber = req.body.orderNumber;
    try {
        const result = await ordersController.findOrder(orderNumber);
        const resultIsObject = helperService.isObjectNotEmpty(result);
        if (resultIsObject == false) {
            res.status(404).send({message: "Order not founded."});
            return;
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({message: "Internal server error."});
        console.error(`${local} - Error: `, error);
    }
});

router.get("/orders", async (req, res) => {
    try {
        const result = await ordersController.getOrders();
        const resultIsNotEmpty = helperService.isArrayNotEmpty(result);
        if (resultIsNotEmpty == false) {
            res.status(404).send({message: "Orders do not exist"});
            return
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({message: "Internal server error"});
        console.error(`${local} - Error: `, error.message);
    }
});

module.exports = router;