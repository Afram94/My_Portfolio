import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    nextjs,
    laravel,
    
    mysql_logo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
    {
      title: "backend Developer",
      icon: backend,
    },
    {
      title: "Next.js developer",
      icon: web,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    /* {
      name: "Redux Toolkit",
      icon: redux,
    }, */
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    /* {
      name: "Node JS",
      icon: nodejs,
    }, */
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "laravel",
      icon: laravel,
    },
    {
      name: "mysql_logo",
      icon: mysql_logo,
    },
    /* {
      name: "Three JS",
      icon: threejs,
    }, */
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "nextjs",
      icon: nextjs,
    },
  ];
  
  const experiences = [
    {
      title: "Laravel PHP - Vue.js - Tailwind CSS",
      position: "Frontend Developer with Backend Contributions",
      /* project_name: "Brinto Booking", */
      company_name: "Smart Cash AB - Brinto Booking",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2021 - January 2022",
      points: [
        "Developed and maintained optimized user interfaces using Vue.js, improving user interaction and experience.",
        "Contributed to backend functionalities using Laravel, optimizing the overall application efficiency.",
        "Played a key role in integrating Fortnox for streamlined invoice generation.",
        "Implemented an in-built Trello board for effective task and errand management.",
        "Gained hands-on experience in deploying applications on AWS, focusing on scalability and performance.",
      ],
    },
    {
      title: "Laravel PHP - Vue.js - Tailwind CSS",
      position: "Solo Full-stack Web Developer",
      company_name: "Smart Cash AB - Botnova",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2021 - April 2022",
      points: [
        "Led the full-stack development, gaining proficiency in both Vue.js and Laravel.",
        "Enhanced the cohesiveness and functionality of designs utilizing Tailwind CSS.",
        "Handled secure customer data storage and tracked product ownership efficiently.",
        "Managed inventory and streamlined various functions in both frontend and backend of the application.",
      ],
    },
    {
      title: "Django - React.js - Tailwind CSS",
      position: "Front End Developer (Team Role)",
      company_name: "Smart Cash AB - BrintoPay",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2022 - Sep 2023",
      points: [
        "Played a pivotal role in designing an ordering platform using React.js, facilitating both dine-in and delivery options and significantly enhancing user experience.",
        "Worked collaboratively with a cross-functional team to deliver a system that enables efficient order management for restaurants, improving service speed and precision.",
        "Refined visual aesthetics and interface responsiveness using Tailwind CSS, contributing to the overall improvement of the platform's design.",
      ],
    },
    {
      title: "React.js - Figma - Tailwind CSS",
      position: "Solo Frontend Web Developer",
      company_name: "Smart Cash AB - Smart Cash Website",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "February 2023 - May 2023",
      points: [
        "Spearheaded the development of a mobile-responsive company website using React.js, significantly improving proficiency in the technology.",
        "Collaborated closely with the design team using Figma, enhancing interface design and user experience through Tailwind CSS.",
      ],
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  