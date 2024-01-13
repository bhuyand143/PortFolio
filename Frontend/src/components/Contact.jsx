import React, { useRef, useState } from 'react'
import { styles } from '../style'
import { motion } from 'framer-motion'
// import emailjs from '@emailjs/browser'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


// const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const publickey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const host = import.meta.env.VITE_HOST_URL;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(`${host}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: form.name, message: form.message, email: form.email })
      });
      const json = await response.json()
      console.log(json);
      setLoading(false);
      alert('Thank you! I will get back to you as soon as possible');
      setForm({
        name: '',
        email: '',
        message: ''
      })
      setSubmitted(true);
    }
    catch (error) {
      setLoading(false);
      console.log(error);
      alert('Something went wrong!')
    }
    // e.preventDefault();
    // setLoading(true);
    // emailjs.send(
    //   serviceID,
    //   templateID,
    //   {
    //      from_name:form.name,
    //      to_name:'Dibyajyoti Bhuyan',
    //      form_email:form.email,
    //      to_email:'dbhuyan912@gmail.com',
    //      message: form.message
    //   },
    //   publickey
    // ).then(()=>{
    //     setLoading(false);
    //     alert('Thank you! I will get back to you as soon as possible');
    //     setForm({
    //       name: '',
    //       email: '',
    //       message: ''
    //     },(error)=>{
    //       setLoading(false);
    //       console.log(error);
    //       alert('Something went wrong!')
    //     })
    // })
    // try {
    //   e.preventDefault();
    //   setLoading(true);
    //   const response = await fetch(`${host}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name: form.name, message: form.message, email: form.email })
    //   });
    //   const json = await response.json()
    //   console.log(json);
    //   setLoading(false);
    //   alert('Thank you! I will get back to you as soon as possible');
    //   setForm({
    //     name: '',
    //     email: '',
    //     message: ''
    //   })
    // }
    // catch (error) {
    //   setLoading(false);
    //   console.log(error);
    //   alert('Something went wrong!')
    // }
  }

  return (
    <div>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl '>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          {!submitted ? (<form ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'>
            <label className="flex flex-col">
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required />
            </label>
            <label className="flex flex-col">
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required />
            </label>
            <label className="flex flex-col">
              <span className='text-white font-medium mb-4'>Your message</span>
              <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required />
            </label>
            <button type='submit'
              className='bg-tertiary px-8 py-3 outline-none w-fit text-white font-bold shandow-md rounded-xl shadow-primary'>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>) :
            (
              <div className='flex items-center justify-center my-[100px] '>
                <div class="flex flex-col items-center p- space-y-2 bg-black-100 ">
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h1 class="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Thanks For </h1>
                  <h1 class="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Reaching Out!</h1>
                </div>
              </div>
            )}
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>

    </div>

  )
}

export default SectionWrapper(Contact, "contact");