const mongoose = require("mongoose");
const local = "[DB-Connection]";
mongoose.promise = global.Promise;

const dbConnect = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log(`${local} - Connected.`);
        return true;
    } catch (error) {
        console.error(`${local} - Failed trying to connect: `, error.message);
        return false;
    }
}

const runDatabaseConnection = async (uri) => {
    try {
        const madeConnection = await dbConnect(uri);
        if (madeConnection == false) {
            return false;
        }
        return true;
    } catch (error) {
        console.error(`${local} - Error: `, error.message);
        return false;
    }
}

module.exports = {
    runDatabaseConnection
}