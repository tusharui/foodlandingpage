import React from 'react';
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div>
          <Image src="/images/a.png" width={800} height={800} alt="About Image" />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12">
            We deliver our products as fast as Superman can do
          </h1>
          <p className="mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
            We deliver your products at super speed.  
            As fast as Superman, right to your door.
          </p>

          {/* Features List */}
          <div className="mt-8 space-y-8">
            
            {/* Feature 1 */}
            <div className="flex items-center space-x-6">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">01</p>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold">Easy to use application</h2>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
                  We are driven beyond just finishing projects — we aim to create solutions using our website & apps.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center space-x-6">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">02</p>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold">Fast & Secure</h2>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
                  Your deliveries are quick, secure, and always on time.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center space-x-6">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">03</p>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold">Trusted by Customers</h2>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
                  Thousands of happy customers trust us for their daily needs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
