const express = require("express");
const server = express();
const PORT = 3000;
const local = "[Server]";

server.use(express.json());

try {
    server.listen(PORT, () => {
        console.log(`${local} - Runing on port ${PORT}`);
    });
} catch (error) {
    console.error(`${local} - Failed trying to run server: `, error);
}