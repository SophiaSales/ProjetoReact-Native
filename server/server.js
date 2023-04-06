const express = require("express");
const server = express();
const routes = require("./routes/routes");
const PORT = 3000;
const local = "[Server]";

server.use(express.json());
server.use(routes);

try {
    server.listen(PORT, () => {
        console.log(`${local} - Runing on port ${PORT}`);
    });
} catch (error) {
    console.error(`${local} - Failed trying to run server: `, error);
}