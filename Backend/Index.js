import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import connectToDatabase from './dbconfigs/mongodb.js';
import UserModel from './model/UserModel.js';
config();



const app =express();

app.use(cors());
app.use(bodyParser.json())

app.post("/register",async(req,res)=>{
    const body =await req.body
    await connectToDatabase();
  
   const savingUser= new UserModel(body)
   await savingUser.save()
   console.log(savingUser)

return res.status(200).json({message:"Your request arrived at end point"})

})

app.listen(process.env.PORT,(res)=>{
    console.log("server is running on port ",process.env.PORT)
})