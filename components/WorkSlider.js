// icons
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Mousewheel, Pagination } from 'swiper'

import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link'
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/gym1.png',
        },
        {
          title: 'title',
          path: '/gym2.png',
        },
        {
          title: 'title',
          path: '/gym3.png',
        },
        {
          title: 'title',
          path: '/gyms4.png',
        },
      ],
      link:'https://gym-freaks.netlify.app/',
      title:"Gym freaks Site"
    },
    {
      images: [
        {
          title: 'title',
          path: '/dalle1.png',
        },
        {
          title: 'title',
          path: '/dalle2.png',
        },
        {
          title: 'title',
          path: '/dalle3.png',
        },
        {
          title: 'title',
          path: '/dalle4.png',
        },
      ],
      link:'https://prompt-ai-image-generator.netlify.app/',
      title:"Dall-E  (AI Image Generator)"
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Mousewheel, Pagination]}
      mousewheel={true}
      className='h-[300px] sm:h-[500px]'
    >
      {
        workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index} >
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return (
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                      <div className='relative overflow-hidden flex items-center justify-center group'>
                        <Image src={image.path} alt={image.title} width={500} height={300} />
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#f3d480] to-[#e4ab0f] opacity-0 group-hover:opacity-80
                          transition-all duration-700
                        '></div>
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 font-bold transition-all duration-300'>
                          <Link href={slide.link} target="_blank" >
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>  
                              <div className='delay-100 text-accent'>LIVE</div>
                              <div className='text-accent translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                              <div className='text-black  text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='flex mt-2 text-xl items-center justify-center'>{slide.title}</div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default WorkSlider;

