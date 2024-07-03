import mongoose from "mongoose";
import { config } from "dotenv";
config();
export default async function connectToDatabase(){
    const connectionString=process.env.MONGO_URI
    console.log(connectionString)
    try {
        await mongoose.connect(connectionString)
        console.log("Mongo db connected")
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}