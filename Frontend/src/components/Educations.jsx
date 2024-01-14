import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { education } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const EducationCard=({education})=>(
  <VerticalTimelineElement
    contentStyle={{background:'#1d1836',color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={education.date} 
    iconStyle={{background:education.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
        src={education.icon} 
        alt={education.company_name} 
        className='w-[80%] h-[80%] object-contain' 
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold' style={{margin:0}}>{education.title}</h3>
      <p className='text-secondary text-[16px] font-semibold'>{education.institute_name}</p>
    </div>
    {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point,index)=>(
          <li key={`experience-point-${index}`}
          className=' text-white text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
    </ul> */}
  </VerticalTimelineElement>
)

const Educations = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Learning Journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
         <VerticalTimeline>
            {education.map((en,index)=>(
              <EducationCard key={index} education={en}/>
            ))}
         </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Educations,'education')