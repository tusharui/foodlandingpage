import React from 'react'
import Hero from './Hero/Hero'
import Restaurant from './Restaurant/Restaurant'
import Category from './Category/Category'
import Howitwork from './Howitwork/Howitwork'
import About from './About/About'
import Features from './Features/Features'
import CilentReview from './CilentReview/CilentReview'
import Footer from './Footer/footer'


const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero/>
      <Restaurant/>
      <Category/>
      <Howitwork/>
      <About/>
      <Features/>
      <CilentReview/>
      <Footer/>
    </div>
  )
}

export default Home