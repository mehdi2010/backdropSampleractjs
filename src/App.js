import React from 'react'
import { useState, useEffect, Fragrment } from 'react'

import Aboutus from './Pages/Aboutus'
import Home from './Pages/Home'
import Contactus from './Pages/Contactus'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'

function App () {
  return (
    <div className='App' style={{ margin: '30px' }}>
      
      <Router>
        {<Routes>
          <Route exact path='/aboutus' element={<Aboutus/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/contactus' element={<Contactus/>}/>
          </Routes>}
      </Router>
    </div>
  )
}

export default App
