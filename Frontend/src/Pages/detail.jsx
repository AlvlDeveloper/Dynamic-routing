import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Product from './Productdetail/Product'
import axios from 'axios'
const Detail = () => {
    const param=useParams()
    const [data,setData]=useState([])

useEffect(()=>{
  axios.get("https://dummyjson.com/products").then(res=>{setData(res.data.products);console.log(res)}).catch(err=>{console.log(err)})
},[])


    if(data.length>=1){

      return (
        <>
        {data.map((item)=>{
          if(item.id==param.id){
            return <Product img={item.thumbnail} images={item.images} title={item.title} description={item.description} price={item.price}/>
          }
        })}
        </>
      )
    }
    
    else{
      return <>loading</>
    }
}

export default Detail