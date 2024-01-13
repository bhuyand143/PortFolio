import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard=({index,title,icon})=>{
   return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
   )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am currently pursuing a Master's in Computer Applications at the National Institute of Technology, Kurukshetra. Coding is my passion, and I have a strong understanding of C++ and Data Structures and Algorithms (DSA). Additionally, I have completed various projects in web development, utilizing technologies such as React.js, Node.js, Bootstrap, Ejs, Express, and MongoDB. I consider myself a fast learner and would be thrilled to collaborate with you on any joint projects. Below are the skills that align with my passion for software development.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 '>
            {services.map((service,index)=>(
              <ServiceCard key={service.title} index={index} {...service}/>
            ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")