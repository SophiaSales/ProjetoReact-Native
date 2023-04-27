const serverConfig = require("./src/config/serverConfig");
const uri = process.env.DATABASE_STRING;
const local = "[SERVER]";

const main = async () => {
    try {
        serverConfig.serverMiddlewares();
        await serverConfig.serverStart(uri);
    } catch (error) {
        console.error(`${local} - Error: `, error);
    }
}

main();