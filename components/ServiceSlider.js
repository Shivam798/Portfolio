// icons
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import {Mousewheel, FreeMode,Pagination } from 'swiper'

import {
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { AiOutlineCloudServer } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { VscDebugConsole } from "react-icons/vsc";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { GoCodescan } from "react-icons/go";


// data
const serviceData = [
  {
    icon: <GrReactjs />,
    title: 'Front-End Development',
    description: 'Designing responsive UI with integrated third-party APIs for enhanced functionality.',
  },
  {
    icon: <AiOutlineCloudServer />,
    title: 'Backend developement',
    description: 'Crafting API, database management for performance enhancement.',
  },
  {
    icon: <PiPlugsConnectedBold />,
    title: 'Full-Stack Development',
    description: 'Integration of front-end and back-end components for seamless functionality',
  },
  {
    icon: <VscDebugConsole />,
    title: 'Testing and Debugging',
    description: 'Debugging and resolving issues to maintain a stable and reliable application',
  },
  {
    icon: <RxRocket />,
    title: 'Deployment ',
    description: 'Deploying and maintaining applications for optimal production performance.',
  },
  {
    icon: <GoCodescan />,
    title: 'Problem Solving and Optimization ',
    description: 'Resolving issues , scalability and efficiency optimization of the code',
  },
];


const ServiceSlider = () => {
  return <Swiper  breakpoints={{
    320: {
      slidesPerView:1,
      spaceBetween:15
    },
    640: {
      slidesPerView:3,
      spaceBetween:15
    }    
  }}
  freeMode={true}
  pagination={{clickable:true }}
  modules={[Mousewheel,FreeMode,Pagination]}
  mousewheel={true}
  className='h-[240px] sm:h-[380px]'
  >
    {
      serviceData.map((item,index)=>{
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)]  min-h-[200px] sm:min-h-[340px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-
            hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-accent mb-4 '>{item.icon}</div>
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        
        )
      })
    }
  </Swiper>;
};

export default ServiceSlider;
