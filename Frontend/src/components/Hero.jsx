import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { styles } from '../style'
import Typed from 'typed.js'
import { mypic } from '../assets'


const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const strings = ["Full Stack Web Developer", "Backend Developer", "Frontend Developer", "Passionate Coder"];

    const options = {
      strings: strings,
      startDelay: 25,
      typeSpeed: 75,
      backSpeed: 50,
      backDelay: 100,
      onComplete: (self) => {
        // Reset Typed instance on completion of typing all strings
        self.reset();
      },
    };
    const typed = new Typed(el.current, options);

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Dibyajyoti</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 font-bold`}>A <span ref={el}></span></p>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center mt-[300px]">
        <img src={mypic} alt="Your Image" className="sm:max-w-full sm:max-h-full xs:max-w-[300px] rounded-full object-center object-cover border-4 border-blue-700" />
      </div>
    </section>
  )
}

export default Hero