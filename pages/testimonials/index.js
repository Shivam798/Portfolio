import TestimonialSlider from "../../components/TestimonialSlider";
import Bulb from '../../components/Bulb'

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Circles from "../../components/Circles";


const Testimonials = () => {
  return (
    <div className="h-auto lg:h-full  bg-primary/30 pt-32 pb-20 text-center">
      <div className="hidden lg:block">
      <Circles /> 
      </div>
      <div className="container mx-auto h-full flex flex-col justify-center  ">
        <motion.h2
          variants={fadeIn('up', 0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          className="h2 mb-8 xl:m-0 "
        >
          What People <span className="text-accent">says</span>
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>

  )

};

export default Testimonials;
