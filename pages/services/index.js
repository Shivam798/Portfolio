import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return <div className='h-auto lg:h-full bg-primary/30 pt-32 pb-20 flex items-center'>
    <div className="hidden lg:block">
      <Circles /> 
    </div>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='h2 xl:mt-8'
          >
            MY SERVICES 
            <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            As a full-stack developer, I craft seamless web solutions, excelling in design, functionality, and security across front-end, back-end, and database management for optimal performance.
          </motion.p>
        </div>
        <motion.div 
          variants={fadeIn('down', 0.6)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className='w-full xl:max-w-[65%]'>
          <ServiceSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Services;
