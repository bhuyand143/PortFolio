import {
    mobile,
    backend,
    fullstack,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    cplusplus,
    mysql,
    express,
    ravenshaw,
    nitkkr,
    jnv,
    yelpcamp,
    newsapp,
    inotebook,
    materalui,
    collabtext
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: fullstack,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Data Structure And Algorithms",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Material UI",
      icon: materalui,
    },
  ];
  
  const education = [
   
    {
      title: "Master of Computer Applications ",
      institute_name: "National Institute of Technology,Kurukshetra",
      icon: nitkkr,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Present",
    },
    {
      title: "BSc(Information Technology Management)",
      institute_name: "Ravenshaw University,Cuttack",
      icon: ravenshaw,
      iconBg: "#383E56",
      date: "Aug 2018 - Jun 2021",
    },
    {
      title: "Higher Secondary Education",
      institute_name: "Jawahar Navodaya Vidyalaya, Baro, Kendrapara",
      icon: jnv,
      iconBg: "#E6DEDD",
      date: "June 2015 - May 2017",
    },
    {
      title: "Secondary Education",
      institute_name: "Jawahar Navodaya Vidyalaya, Baro, Kendrapara",
      icon: jnv,
      iconBg: "#383E56",
      date: "Aug 2010 - Mar 2015",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Yelp-Camp",
      description:
        "Web-based platform that allows users to explore,add, and manage Campgrounds from various users making your camping experience memorable.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name:'mapbox',
          color:'orange-text-gradient'
        },
      ],
      image: yelpcamp,
      source_code_link: "https://github.com/bhuyand143/YelpCamp",
    },
    {
      name: "News-Monkey",
      description:
        "Web application that makes it easy for you to explore the most recent headlines & access in-depth articles across various news categories effortlessly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image:newsapp ,
      source_code_link: "https://github.com/bhuyand143/NewsApp",
    },
    {
      name: "CollabText",
      description:"Web application enabling real-time collaboration, anywhere anytime access and prioritizing privacy for convenient collaboration experiences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "pink-text-gradient",
        },
        {
          name:'nodejs',
          color:'orange-text-gradient'
        }
      ],
      image: collabtext,
      source_code_link: "https://github.com/bhuyand143/RealTimeTextEditor",
    },
  ];
  
  export { services, technologies, education, testimonials, projects };