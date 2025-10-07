// components/About.js
'use client';

import { FaShippingFast, FaGlobeAmericas, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8 mt-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Image Section with Badge */}
          <div className="relative w-full md:w-1/2 border-2 p-2 shadow-lg hover:scale-105 transition-all"> {/* Added padding to prevent cropping */}
            <Image
              src={'/Moving.jpg'}
              width={1750}
              height={1985}
              alt='Team unloading a moving truck'
              className=" shadow-lg"
            />
            {/* The Badge - Now offset from the corner */}
            <div className="absolute top-2 left-2 bg-orange-500 text-white w-36 h-36 rounded-full flex flex-col items-center justify-center text-center p-3 shadow-xl transform -translate-x-1/5 -translate-y-1/5 transition-transform hover:scale-105">
              <span className="text-4xl font-bold leading-none">17+</span>
              <span className="text-sm font-semibold leading-tight mt-1">Years of Experience</span>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2">
            <div className='flex items-center gap-2'>
              <FaQuoteLeft className="text-orange-500 text-2xl flex-shrink-0" />
              <div>
                <h3 className="text-black font-semibold uppercase tracking-wider"><i>WHO WE ARE</i></h3>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">We Are Leader In Moving Company</h2>
            <p className="text-gray-600 mb-6">
              Granida accumsan turpis condimentum nulla est a et ultricies odio. Susci varius purus nam et dictumst. Nunc eleifend justo rhoncus viverra. Consectetur volutpat dolor neque pellentesque habitasse quisque maecenas.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="flex items-center gap-4">
                <FaShippingFast className="text-orange-500 text-3xl flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Fast & Efficient</h4>
                  <p className="text-gray-600 text-sm">Quick and reliable moving services.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaGlobeAmericas className="text-orange-500 text-3xl flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Nationwide</h4>
                  <p className="text-gray-600 text-sm">We cover all locations across the country.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-4xl cursor-pointer">
              MORE ABOUT US
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;