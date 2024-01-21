import Link from 'next/link'
import { RiLinkedinLine, RiGithubLine, RiTwitterXLine ,RiFacebookLine ,RiInstagramFill} from 'react-icons/ri';

const socials = [
  {
    link: "https://www.linkedin.com/in/shivam-baghel-8a964b177/",
    icon:  RiLinkedinLine 
  },
  {
    link: "https://github.com/Shivam798",
    icon:  RiGithubLine 
  },
  {
    link: "https://twitter.com/ShivamBaghel_98",
    icon:  RiTwitterXLine 
  },
  {
    link: "https://www.facebook.com/shivam.baghel.5030927",
    icon:  RiFacebookLine 
  },
  {
    link: "https://www.instagram.com/anonymous.luffy",
    icon:  RiInstagramFill 
  },
]

const Socials = () => {
  return (
    <div className='flex items-center gap-x-10 text-lg'>
      {socials.map((item, index) => {
        return (
          <Link key={index} target="_blank" href={item.link} className='hover:text-accent transition-all duration-300 '>
            <item.icon  />
          </Link>
        )
      })}

    </div>
  )
};

export default Socials;
