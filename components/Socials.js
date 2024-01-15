import Link from 'next/link'
import { RiLinkedinLine, RiGithubLine, RiTwitterXLine ,RiFacebookLine } from 'react-icons/ri';

const socials = [
  {
    link: "www.google.com",
    icon:  RiLinkedinLine 
  },
  {
    link: "www.google.com",
    icon:  RiGithubLine 
  },
  {
    link: "www.google.com",
    icon:  RiTwitterXLine 
  },
  {
    link: "www.google.com",
    icon:  RiFacebookLine 
  },
]

const Socials = () => {
  return (
    <div className='flex items-center gap-x-10 text-lg'>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.link} className='hover:text-accent transition-all duration-300 '>
            <item.icon  />
          </Link>
        )
      })}

    </div>
  )
};

export default Socials;
