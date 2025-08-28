import React from 'react'
import HowitWorkCard from './HowitWorkCard'

const Howitwork = () => {
  return (
    <div className='pt-16 pb-16'>
      <h1 className="text-xl sm:text-2xl text-center font-extrabold dark:text-white "> Let's See How it Works </h1>
      <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10 ' >
        <div>
          <HowitWorkCard  num = "01" image ="/images/w1.png" title="Become a Delivery Man" description="As delivery driver , you'll make reliable money-working anytime, anywhere" />
        </div>

        <div>
          <HowitWorkCard  
          num = "02" 
          image ="/images/w2.png" 
          title="Become a Partner " 
          description=" Grow your business and reach new customers by partneering with us " />
        </div>


        <div>
          <HowitWorkCard  
          num = "03" 
          image ="/images/w3.png" 
          title="Try Android/IOS App" 
          description=" Get the best DoorDash experience with live order tracking " />
        </div>


      </div>
    </div>
  )
}

export default Howitwork