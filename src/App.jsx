import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'

const App = () => {
  return (
    <>
      <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero />
          <FeatureSection />
        </div>
    </>
  
  )
}

export default App
