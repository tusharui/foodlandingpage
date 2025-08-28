import React from 'react'
import Hero from './Hero/Hero'
import Restaurant from './Restaurant/Restaurant'
import Category from './Category/Category'
import Howitwork from './Howitwork/Howitwork'
import About from './About/About'

const Home = () => {
  return (
    <div className="overflow-hidden h-[20000px]">
      <Hero/>
      <Restaurant/>
      <Category/>
      <Howitwork/>
      <About/>
    </div>
  )
}

export default Home