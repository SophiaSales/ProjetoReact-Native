const express = require("express");
const dbConnection = require("./config/dbConnection");
const server = express();
const ordersRoutes = require("./routes/ordersRoutes");
const usersRoutes = require("./routes/usersRoutes");
const PORT = 3000;
const local = "[Server]";

server.use(express.json());
server.use(ordersRoutes);
server.use(usersRoutes);

try {
    server.listen(PORT, () => {
        console.log(`${local} - Runing on port ${PORT}`);
    });
} catch (error) {
    console.error(`${local} - Failed trying to run server: `, error);
}