import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Portrait from '../Components/Portrait/Portrait'
import '../App.css'

function Home() {
const [data,setdata]= useState([])
useEffect(()=>{
  axios.get('https://dummyjson.com/products').then(res=>setdata(res.data.products)).catch(err =>{console.log(err)})

},[])
if(data.length>=1){
  return<>

        <div id='card'>
           {data.map((item)=>{
            return <Portrait image={item.images[0]} head={item.title} route={item.id}/>
           })}

        </div>
  
  
  
  </>

      
    
  }
  else{
    return<>
    Loading....
    
    </>
  }
  
}

export default Home
