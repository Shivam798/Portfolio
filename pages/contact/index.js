import Circles from "../../components/Circles"
import { BsArrowRight } from "react-icons/bs";
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const SERVICE_KEY = process.env.NEXT_PUBLIC_SERVICE_KEY
  const TEMPLATE_KEY = process.env.NEXT_PUBLIC_TEMPLATE_KEY
  const EMAILJS_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY
  const sendEmail =(e)=>{
    e.preventDefault();
    console.log(SERVICE_KEY);
    emailjs.sendForm(SERVICE_KEY, TEMPLATE_KEY, formRef.current, EMAILJS_KEY)
      .then((result)=>{
        console.log(result.text);
        toast.success("Email Send Successfully");
        formRef.current.reset();
      },(error)=>{
        console.log(error.text);
        toast.error("Email Send Failed",error.text)
      })    
  }
  return <div className="h-full bg-primary/30 ">
    <Toaster position="top-center"/>
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
      <div className="flex flex-col w-full max-w-[700px]">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-12">Let's Connect <span className="text-accent">.</span></motion.h2>
        {/* form */}
        <motion.form
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col gap-6 w-full mx-auto"
          ref={formRef}
          onSubmit={sendEmail}
          >
          {/* group */}
          <div className='flex gap-6 w-full '>
            <input type="text" placeholder="name" className="input" name="name" />
            <input type="text" placeholder="email" className="input" name="email" required/>
          </div>
          <input type="text" placeholder="subject" className="input" name="subject"/>
          <textarea className="textarea" placeholder="message" name="message" />
          <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 
            flex items-center justify-center overflow-hidden hover:border-accent group">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Let's Talk
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
          </button>
        </motion.form>
      </div>
    </div>
    <Circles/>
  </div>;
};

export default Contact;
