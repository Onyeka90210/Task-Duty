import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import '../styles/Home.css'

const Home = () => {
  useEffect (()=>{
    document.title = 'Home || Page'
  })
    return (
    <div className = 'container MB'>
        <Hero/>
        </div>
  )
}

export default Home