import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import './Product.css'
import { useState } from 'react';



const Product = (props) => {
  const {img,images,title,description,price}=props

  const [count,setCount]=useState(0)
  
        const counter=(e)=>{
         const value=e.currentTarget.value
          if(value==="increase"){
           setCount(count+1)
            }else if(value==="decrease"){
              if(count<2){
setCount(1)
              }
              else{

                setCount(count-1)
              }
         }}

  return <>

  <section id='information'>
    <nav id='nav'>
        <div><h3>PRODUCT DESCRIPTION</h3></div>
        <div><FaCartShopping /></div>
    </nav>

    <main id='description'>
        <div id='left'>
         <div id='img1'><img src={img} alt="img" /></div>

         <div id='images'>
           {images.map((item)=>{
            return <>
           <img src={item} alt="img" />
           </>
           })}

          </div>

        </div>

        <div id='right'>
            <div id='right'>
                <h1>{title}</h1>
                <p>{description}</p>
                <h3>${price}</h3>

                <div id='hello'>
                <button id='btn'><FaCartShopping /> Add to Cart</button>
                <button  value="increase" id='function'  onClick={counter}>+1</button>
                    
                <button  value='decrease' id='function'  onClick={counter}>-1</button>

                <div id='itm'>
                  
                  
                  <h4>Quantity:{count}</h4>
                  
                
                  
                </div>
                </div>
                
            
            
            </div>
            


        </div>
        
        

    </main>



  </section>
  


  
  </>
  
}

export default Product