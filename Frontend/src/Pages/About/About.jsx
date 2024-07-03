import React, { useState } from 'react'
import './style.css'
function About() {
    const [count,setCount]=useState(0)

    const counter=(e)=>{
 const value=e.currentTarget.value
 if(value==="increase"){
    setCount(count+1)
 }else if(value==="decrease"){
    setCount(count-1)
 }else{
    setCount(1)
 }

    }
    // const increment=()=>{
    //     setCount(count+1)
    // }
    // const decrement=()=>{
    //     setCount(count-1)
    //   }
    //   const rest=()=>{
    //     setCount(0)
    //   }
  return (
    <>
     <div className="App">
      <div className="counter">
        <h1 className={count>1?"green":count<1?"red":""}>{count}</h1>
        <div className="buttons">
          <button className='extra' value="increase" onClick={counter}>+1</button>
          <button 
          className='extra'
           value="decrease"
          onClick={counter}
          >-1</button>
          <button 
          className='extra'
           value="reset"
          onClick={counter}>Reset</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default About