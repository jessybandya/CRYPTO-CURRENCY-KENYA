import React from 'react'
import Header from '../Header'
import Hero from "./new/Hero"
import Featured from "./new/Featured"
import Signup from "./new/Signup"
import Footer from "./new/Footer"

function Home() {
  return (
    <div>
    <Header/>
    <Hero />
    <Featured />
    <Signup />
    <Footer />
    </div>
  )
}

export default Home