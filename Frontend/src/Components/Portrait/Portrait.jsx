import React from 'react'
import './Portrait.css'

function Portrait({image,head,route}) {
  return (
    <>
    <a href={`/${route}`}>

    <section id='portrait'>
        <div id='image' style={{background:`url(${image})`,backgroundSize:'contain',backgroundPosition:'center', backgroundRepeat: 'no-repeat'}}></div>
        <div id='head'>{head}</div>
        
    </section>
    </a>
    </>
  )
}

export default Portrait