import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Detail from './Pages/detail';
import About from './Pages/About/About';
import Register from './Pages/Register/Register';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path ='/' element= {<Home/>} />
    <Route path ='/About' element= {<About/>} />
    <Route path ='/Register' element= {<Register/>} />
    <Route path='/:id' element={<Detail />} />

    

  </Routes>
  
  </BrowserRouter>
  
  
  )
}

export default App