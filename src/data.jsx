import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaNode } from 'react-icons/fa'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiNestjs, SiTypescript } from 'react-icons/si'
import { AiOutlineApi } from "react-icons/ai"
import IMAGES from './images/Images'
// import { evidenta_acte_juridice } from './images/Images/evidentaActeJuridice.PNG'
// import { GGSpyShop } from './assets/GGSpyShop.PNG'
// import { GGPhoneShop } from './assets/GGPhoneShop.PNG'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNode className='h-16 w-16 text-emerald-500' />,
    text: 'Developing and maintaining web applications using Node. js and JavaScript, including writing clean, scalable & efficient code with Node.',
  },
  {
    id: nanoid(),
    title: 'TailwindCSS',
    icon: <BiLogoTailwindCss className='h-16 w-16 text-emerald-500' />,
    text: 'Customize web apps using TailwindCSS UI components',
  },
  {
    id: nanoid(),
    title: 'NextJs',
    icon: <TbBrandNextjs className='h-16 w-16 text-emerald-500' />,
    text: 'Building server-side rendered web applications using Next.js, delivering fast and SEO-friendly web experiences',
  },
  {
    id: nanoid(),
    title: 'NestJs',
    icon: <SiNestjs className='h-16 w-16 text-emerald-500' />,
    text: 'Design, develop, and maintain server-side applications using NestJS',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in TypeScript',
  },
  {
    id: nanoid(),
    title: 'RESTful APIs',
    icon: <AiOutlineApi  className='h-16 w-16 text-emerald-500' />,
    text: 'Design and develop RESTful APIs using Node.js, Express,integrate APIs with databases such as MongoDB, MySQL',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: IMAGES.evidentaActeJuridice,
    url: 'https://evidenta-acte-juridice.vercel.app/landing',
    github: 'https://github.com/nidarg/evidenta-acte-juridice',
    title: 'Evidenta Acte Juridice',
    text: 'Application for the management of legal documents through which the client has a clear record of the deadline for the preparation or submission to the court of the respective documents',
  },
  {
    id: nanoid(),
    img: IMAGES.GGSpyShop,
    url: 'https://gg-shop-mern.vercel.app/',
    github: 'https://github.com/nidarg/mern-shop-GG',
    title: 'GGSpyShop',
    text: 'Shop App created with React, Redux as state management, mongoose, express, react-bootstrap.',
  },
  {
    id: nanoid(),
    img: IMAGES.GGPhoneShop,
    url: 'https://ggp-hone-shop-next-js.vercel.app/',
    github: 'https://github.com/nidarg/GGPhoneShopNextJS',
    title: 'GGPhoneShop',
    text: 'Shop App created with Next.js and Sanity.',
  },
]
