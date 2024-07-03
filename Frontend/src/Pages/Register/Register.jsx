import React, { useState } from 'react'
import "./Register.css"
import axios from "axios"
const Register = () => {
    const [data,setData]=useState({
        username:"",
        email:"",
        password:"",
    });

    const handelSubmite=(e)=>{
        e.preventDefault();
        
        console.log("FormSubmited",data)
        axios.post('http://localhost:5000/register',data).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    }
  return<>
  <div id='page'>

    <div className="container">
        <h2>Registration Form</h2>
        <form onSubmit={handelSubmite}>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" onChange={(e)=>{setData({...data,username:e.target.value})}} required></input>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e)=>{setData({...data,email:e.target.value})}} required></input>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e)=>{setData({...data,password:e.target.value})}} required></input>
            </div>
            <div class="form-group">
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  </div>
    
    </>
   
  
}

export default Register