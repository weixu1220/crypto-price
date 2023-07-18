import { useState } from 'react'
import './App.css'
import Main from './pages/Main'
import Price from './pages/Price'
import Currencies from './pages/Currencies'
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
function App() {

  return (
    <div className="App">
      {/* we don't want to use an <a>tag because it will rerender the page */}
      <Nav/>
      <Routes>
        <Route path='/' element={<Main />}/>
        {/* we can create our own url parameter with /:symbol */}
        <Route path='/price/:symbol' element={<Price />}/>
        <Route path='/currencies' element={<Currencies />}/>
      </Routes>
    </div>
  )
}

export default App
