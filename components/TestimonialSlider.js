// testimonial data
const testimonialData = [
  {
    image: '/test_1.png',
    name: 'Shikhar Gupta',
    position: 'Team Member',
    message:
      "Collaborating with Shivam is an enriching experience ,his dedication guarantee successful projects, fueled by a contagious passion for crafting digital solutions."
  },
  {
    image: '/test2.png',
    name: 'Tarun Bhardwaj',
    position: 'Team Member',
    message:
      'Partnering with Shivam on multiple projects has been exceptional. His perfect blend of creativity and technical prowess consistently exceeds expectations.',
  },
];

// icons
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Mousewheel, Pagination } from 'swiper'

import Image from 'next/image'
import { FaQuoteLeft } from "react-icons/fa";


const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation,Mousewheel, Pagination]}
      mousewheel={true}
      className=' sm:h-[380px]'
    >
      {
        testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index} >
              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                {/* avatar name postion */}
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                  <div className='flex flex-col justify-center text-center '>
                    <div className='mb-2 mx-auto'>
                      <Image src={person.image} width={100} height={100} alt=''/>
                    </div>
                    <div className='text-lg'>{person.name}</div>
                    <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                  </div>
                </div>
                {/* message */}
                <div className='flex-1 flex flex-col justify-center pb-6 before:w-[1px]
                 xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                  {/* quote icon */}
                  <div className='mb-4 '>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                  </div>
                  <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default TestimonialSlider;


