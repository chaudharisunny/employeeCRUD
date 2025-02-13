import express, { Request, Response } from "express";
import mongoose  from "mongoose";
// Create a new express application instance
const app = express();

// Set the network port
const port = process.env.PORT || 3000;

// Define the root path with a greeting message
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});

//Database connect
const MONGO_URL="mongodb://localhost:27017";

mongoose.connect(MONGO_URL,{
    dbName:"node-typescript-app"
}).then(()=>{
    console.log("database connect");
    
}).catch((error)=>{
    console.log(error);
    
})

// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});

