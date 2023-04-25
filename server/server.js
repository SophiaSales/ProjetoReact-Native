const express = require("express");
require("dotenv").config();
const dbConnection = require("./src/config/dbConnection");
const server = express();
const ordersRoutes = require("./src/routes/ordersRoutes");
const usersRoutes = require("./src/routes/usersRoutes");
const loginRoutes = require("./src/routes/loginRoutes");
const database = require("./src/config/dbConnection");
const PORT = 3000;
const local = "[Server]";

server.use(express.json());
server.use(ordersRoutes);
server.use(usersRoutes);
server.use(loginRoutes);

const serverConfig = async (uri) => {
    try {
        const isDbConnected = await database.runDatabaseConnection(uri);
        if (isDbConnected == true) {
            server.listen(PORT, () => {
                console.log(`${local} - Runing on port ${PORT}`);
            });
        }
    } catch (error) {
        console.error(`${local} - Failed trying to run server: `, error.message);
    }
}

const main = async () => {
    try {
        await serverConfig(process.env.DATABASE_STRING);
    } catch (error) {
        console.error(`${local} - Error: `, error.message);
    }
}

main();