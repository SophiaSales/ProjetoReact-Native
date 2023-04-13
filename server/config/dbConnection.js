require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.DATABASE_STRING;
const local = "[Database]";
mongoose.Promise = global.Promise;

const dbConnect = async () => {
    try {
        await mongoose.connect(uri);
        console.log(`${local} - connected.`);
    } catch (error) {
        console.error(`${local} - Failed trying to connect.`);
        process.exit(1);
    }
}

const startConnection = async () => {
    try {
        await dbConnect();
    } catch (error) {
        console.error(`${local} - Failed trying trying to call dbConnect function: `, error);
        process.exit(1);
    }
}

module.exports = startConnection();