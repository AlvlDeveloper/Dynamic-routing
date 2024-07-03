import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    username:{type:String,required:[true,"User field is needed"]},
    email:{type:String,required:true},
    password:{type:String,required:true}

})


const UserModel=mongoose.models.user || mongoose.model("user",userSchema)

export default UserModel