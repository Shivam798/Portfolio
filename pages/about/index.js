import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Languages',
        names: [
          'Javascript',
          "Java",
          "Python"
        ],
      },
      {
        title: 'Frameworks/Libraries',
        names: [
          'React',
          "Next.js",
          "Node.js",
          "Spring-Boot"
        ],
      },
      {
        title: 'Databases',
        names: [
          'MongoDB',
          "PostgreSQL",
          "MySQL",
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Developer Engineer - ',
        source: 'KULIZA',
        stage: 'Aug 2023 - Present',
      },
      {
        title: 'Software Developer Engineer - ',
        source: 'PAYTM',
        stage: 'Jan 2023 - June 2023',
      },
    ],
  },
  {
    title: 'achievements',
    info: [
      {
        title: 'Front-End Web UI Frameworks - ',
        source: 'Coursera',
        stage: 'Sept 2021',
      },
      {
        title: 'Certificate of Recognition - ',
        source: 'PAYTM',
        stage: 'April 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'B.Tech( CSE ) - ',
        source: 'G.L. Bajaj',
        stage: '2019 - 2023',
      },
      {
        title: 'Intermediate - ',
        source: 'RSS internation School',
        stage: '2019',
      },
    ],
  },
];

const leet = {
  title: "Leetcode problems solved",
  number: 400,
  link: "https://leetcode.com/Shivam_007/"
}
const gfg = {
  title: "GFG problems solved",
  number: 300,
  link: "https://auth.geeksforgeeks.org/user/shivambghl2000/profile"
}
import Circles from '../../components/Circles'
import Counter from "../../components/Counter";

const About = () => {
  const [index, setIndex] = useState(0)
  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2"
        >
          Crafting Concepts into <span className="text-accent">Code</span>
        </motion.h2>
        <motion.p
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="max-w-[500px] mx-auto xl:mx-0 mb-12 px-2 xl:px-0"
        >
          In the digital realm, I&apos;m the developer turning abstract concepts into functional reality through code. With precision and passion, I craft seamless applications, each line a purposeful stroke, shaping immersive experiences beyond expectations.
        </motion.p>
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <Counter end={leet.number} title={leet.title} link={leet.link} />
            </div>
            {/* Clients */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <Counter end={gfg.number} title={gfg.title} link={gfg.link} />
            </div>
            {/* Projects */}
            <div className="relative flex-1 ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
      >
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
          {aboutData.map((item, itemindex) => {
            return (
              <div
                key={itemindex}
                className={`${index === itemindex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                cursor-pointer capitalize xl:text-lg relative 
                after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemindex)}
              >
                {item.title}
              </div>
            )
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemindex) => {
            return (
              <div key={itemindex} className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0">{item.title}<span className="text-white">{item.source}</span></div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {
                    item.names?.map((name, nameindex) => {
                      return (
                        <div key={nameindex} className="group">
                          <div  className="text-white">{name}</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
