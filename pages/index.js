import Image from 'next/image';

// Components
import ParticlesContainter from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

// framer-motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'

// typing animation
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30  '>
        <div
          className='text-center flex flex-col justify-center xl:pt-39 xl:text-left h-full container mx-auto'>
          <motion.h1
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 xl:mt-20'>
            Hi, I&apos;m Shivam Baghel,<br /> a {' '}
            <span className='text-accent'>
              <Typewriter
                words={['Frontend Developer', 'Backend Developer', 'FullStack Developer', 'Java Developer']}
                loop={false}
              />
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:ml-0 mb-10 xl:mb-16 '>
            In the world of bits and bytes, I stand as a full-stack developer, sculpting comprehensive web solutions. Bridging the gap between design and functionality, my code is the backbone of seamless, user-centric experiences.
          </motion.p>
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className='w-[1100px] h-full absolute right-0 bottom-0' >
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat 
          w-full h-full absolute mix-blend-color-dodge translate-z-0 '>
        </div>
        <ParticlesContainter />
        <motion.div
          className='w-full h-full max-w-[700px] max-h-[600px] absolute -bottom-32  lg:bottom-0 lg:right-[2%]'
          variants={fadeIn('up', 0.4)}
          transition={{ duration: 1, ease: 'easeInOut' }}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
};

export default Home;
