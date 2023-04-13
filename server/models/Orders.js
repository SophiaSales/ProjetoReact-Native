const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    orderNumber: {
        type: Number,
        unique: true,
        required: true,
    },
    orderOwner: {
        type: String,
        required: true,
    },
    orderItems: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model("orders", ordersSchema);