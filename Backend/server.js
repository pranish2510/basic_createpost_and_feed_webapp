
require("dotenv").config();

console.log("STEP 1: Server file started");

const app = require("./src/app");
console.log("STEP 2: App imported");

const connectDB = require("./src/db/db");
console.log("STEP 3: Database function imported");

const port = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Could not connect to MongoDB:", error.message);
        process.exit(1);
    }
}

startServer();
