import express, { Request, Response } from "express";
import mongoose  from "mongoose";
import employeeRoutes from "./routes/index"
import cors from "cors"
// Create a new express application instance
const app = express();

// Set the network port
const port = process.env.PORT || 3000;

// Define the root path with a greeting message
app.get("/", (req: Request, res: Response) => {
    Response.json({ message: "Welcome to the Express + TypeScript Server!" });
});

app.use(express.json())
app.use(cors())
//Database connect
const MONGO_URL="mongodb://localhost:27017";

mongoose.connect(MONGO_URL,{
    dbName:"node-typescript-app"
}).then(()=>{
    console.log("database connect");
    
}).catch((error)=>{
    console.log(error);
    
})

app.use('/api/v1/',employeeRoutes)

// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});

