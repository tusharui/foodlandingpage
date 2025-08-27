import React from 'react'
import RestaurantCard from './RestaurantCard'



const Restaurant = () => {
  return (
    <div className='pt-16 pb-16 '>
        {/* section  heading */}
        <div className='text-xl sm:text-2xl text-center font-extrabold'>
            Available Resturant Nearby Area
        </div>
        <div className='w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14 '>
        <div>
            <RestaurantCard image = "/images/r1.jpg" 
            title ="Pizza Hut Delicious Pizza " />
        </div>



        <div>
            <RestaurantCard image = "/images/r2.jpg" 
            title ="Chipotle Mexican Grill " />
        </div>




        <div>
            <RestaurantCard image = "/images/r3.jpg" 
            title ="McDonald's Burgers " />
        </div>



        <div>
            <RestaurantCard image = "/images/r4.jpg" 
            title ="Mix Veg " />
        </div>



        <div>
            <RestaurantCard image = "/images/r5.jpg" 
            title ="Shake Shack" />
        </div>





        <div>
            <RestaurantCard image = "/images/r6.jpg" 
            title ="Chubby Noddle " />
        </div>





        </div>
        <div className='mt-16 text-center '>
            <button className='px-9 py-2.5 sm:px-12 sm:py-3.5 cursor-pointer  dark:text-black rounded-full font-bold text-base  sm:text-lg bg-cyan-700  text-white hover:bg-cyan-950  transition-all duration-300 dark:bg-cyan-600  dark:hover:bg-cyan-400 '>
                Discover More &rarr;
            </button>
        </div>
        </div>
  )
}

export default Restaurant