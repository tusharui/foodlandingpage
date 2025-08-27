import React from 'react'
import Hero from './Hero/Hero'
import Restaurant from './Restaurant/Restaurant'

const Home = () => {
  return (
    <div className="overflow-hidden h-[20000px]">
      <Hero/>
      <Restaurant/>
    </div>
  )
}

export default Home