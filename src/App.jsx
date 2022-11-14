import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import LowerBody from './LowerBody'
import UpperBody from './UpperBody'
import Core from './Core'
import Back from './Back'

function App () {
  return(
    <>
      <Navbar/>

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/upperbody" element={<UpperBody/>}/>
          <Route path="/lowerbody" element={<LowerBody/>}/>
          <Route path="/core" element={<Core/>}/>
          <Route path="/back" element={<Back/>}/>
          <Route path="*" element={<div>404 not found</div>}/>
          
        </Routes>
      </div>
    </>
  )
}

export default App
