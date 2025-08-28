import React from 'react'
import FeaturesCards from './FeaturesCards'

const Features = () => {
  return (
    <div className="pt-16 pb-16">
      <div>
        <h1 className="text-xl sm:text-2xl text-center font-extrabold">
          Meet Our Quality Features
        </h1>
      </div>

      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <FeaturesCards 
          icon="/images/f1.svg" 
          title="Analytics Business" 
          description="Get deep insights and analytics to boost your business growth." 
        />
        
        <FeaturesCards 
          icon="/images/f2.svg" 
          title="Fast Performance" 
          description="Our platform is optimized for speed and reliability." 
        />

        <FeaturesCards 
          icon="/images/f3.svg" 
          title="Secure Platform" 
          description="We ensure top-level security to protect your data." 
        />

        <FeaturesCards 
          icon="/images/f4.svg" 
          title="User Friendly" 
          description="Simple and intuitive design for a smooth user experience." 
        />

        <FeaturesCards 
          icon="/images/f5.svg" 
          title="Customizable" 
          description="Easily tailor features to match your specific needs." 
        />

        <FeaturesCards 
          icon="/images/f6.svg" 
          title="24/7 Support" 
          description="Our support team is always ready to help you anytime." 
        />
      </div>
    </div>
  )
}

export default Features
