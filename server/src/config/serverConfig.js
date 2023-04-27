const express = require("express");
require("dotenv").config();
const server = express();
const orderRoutes = require("../routes/ordersRoutes");
const usersRoutes = require("../routes/usersRoutes");
const sessionRoutes = require("../routes/sessionRoutes");
const database = require("./dbConnection");
const PORT = 3000;
const local = "[SERVER-CONFIG]";

const serverMiddlewares = () => {
    try {
        server.use(express.json());
        server.use(orderRoutes);
        server.use(usersRoutes);
        server.use(sessionRoutes);
    } catch (error) {
        console.error(`${local} - Error: `, error);
    }
}

const serverStart = async (uri) => {
    try {
        const isDbConnected = await database.runDatabaseConnection(uri);
        if (isDbConnected == true) {
            server.listen(PORT, () => {
                console.log(`${local} - Runing on port ${PORT}`);
            });
        }
    } catch (error) {
        console.error(`${local} - Error: `, error);
    }
}

module.exports = {
    serverMiddlewares,
    serverStart
}