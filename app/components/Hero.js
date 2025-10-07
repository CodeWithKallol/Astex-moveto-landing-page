// components/Hero.js
'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    // Make sure the main section is relative to act as a positioning container
    <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://pearlrelocations.com/wp-content/uploads/2023/07/woman-using-house-moving-service-e1670085490485.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Animated Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-25 py-32 md:py-64"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Move Smarter<br /> With Moveto!</h1>
        <p className="text-sm md:text-sm mx-auto mb-8">
          Convallis vivamus at cras porta nibh. Ornare egestas morbi<br /> blandit lacus et feugiat. Nisl laoreet proin aenean sed ut.
        </p>
        <Button size="lg" className="bg-orange-600 hover:bg-orange-400 rounded-4xl text-sm px-7 py-6 cursor-pointer mb-6">
          DISCOVER MORE
        </Button>
      </motion.div>

      {/* Estimate Form Section - Now absolutely positioned */}
      <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-1/2 px-4 mt-5">
        <div className="bg-white shadow-lg rounded-sm p-8 md:p-12 max-w-6xl mx-auto hover:scale-105">
          <div className="flex flex-col lg:flex-row items-center gap-7 w-full">
            <h3 className="text-xl md:text-3xl font-bold text-black whitespace-nowrap flex-shrink-0 text-center lg:text-left sm:overflow-hidden">
              Get Your Free Moving <br className="hidden md:block" />Estimate Here
            </h3>
            {/* Simplified and responsive container for inputs and button */}
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <div className='w-full'>
              <label htmlFor="current-zip" className="block text-sm font-bold text-gray-800">
                  Current Zip/Postal Code
                </label>
              <Input id="current-zip" type="text" placeholder="Current Zip/Postal Code" className="py-3 w-full bg-orange-100 text-black" />
              </div>

              <div className='w-full'>
              <label htmlFor="new-zip" className="block text-sm font-bold text-gray-800 ">
                  New Zip/Postal Code
                </label>
              <Input id="new-zip" type="text" placeholder="New Zip/Postal Code" className="py-3 w-full bg-orange-100 text-black" />
              </div>
              <Button size="lg" className="mt-4 w-full sm:w-auto bg-orange-600 hover:bg-orange-400 py-3 px-8 rounded-4xl cursor-pointer">
                SUBMIT
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;