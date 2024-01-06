import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NewTask from './Pages/NewTask'
import EditTask from './Pages/EditTask'
import AllTask from './Pages/AllTask'
import NavBar from './Layout/NavBar'


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route index element = {<Home/>} />
      <Route path='/AllTask' element={<AllTask/>} />
      <Route path='/EditTask' element={<EditTask/>} />
      <Route path='/NewTask' element={<NewTask/>} /> 

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
