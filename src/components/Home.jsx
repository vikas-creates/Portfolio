import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { ReactTyped,Typed } from "react-typed";
import pic from '../assets/vks.jpg'

function Home() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>    
    <div className='flex flex-col md:flex-row'>
    <div className='md:w-1/2 mt-12 md:mt-12 space-y-2 order-2 md:order-none'>
    <span className='text-xl'>Welcome to my Portfolio</span>
    <div className='flex space-x-1 text-2xl md:text-4xl'>
    <h1>I am a </h1>
    {/* <span className='text-blue-500 font-bold'>
    Developer!!
    </span> */}

        <ReactTyped
          className='text-blue-500 font-bold'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

    </div>
    <br />
    <p className='text-sm md:text-md text-justify'>I am Vikas, a passionate Full Stack Developer with expertise in the MERN stack
        (MongoDB, Express.js, React, Node.js).
        I thrive on building dynamic and efficient
        web applications, focusing on both front-end and 
        back-end development. With a strong foundation in
        cloud technologies like AWS, I am well-versed in 
        deploying and scaling applications in the cloud. 
        I enjoy solving complex problems, optimizing
        performance, and delivering user-friendly solutions.
        Let's build something amazing together!
        </p>
        <br />
        <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
            {/* Social media Icons */}
        <div className='space-y-2'>
            <h1 className='font-bold text-center'>Available on</h1>
        <ul className='flex space-x-5'>
            <li className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]'>
                <a href="https://github.com/vikas-creates"
                target='_blank'>
                <FaGithub/>
                </a>
            </li>
            <li className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]'>
            <a href="https://www.linkedin.com/in/vikas-kumar-923065331/"
                target='_blank'>
                <FaLinkedin/>
                </a>
            </li>
            <li className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]'>
            <a href="https://x.com/rononowasakiv"
                target='_blank'>
             <BsTwitterX/>
            </a>
                
            </li>
            <li className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]'>
            <a href="https://www.instagram.com/vikas_k.b/"
                target='_blank'>
             <FaInstagramSquare/>
            </a>
               
            </li>
            <li className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]'>
            <a href="https://www.facebook.com/login/"
                target='_blank'>
             <FaFacebook/>
            </a>
                
            </li> 
        </ul>
        </div>
        {/* Currently working on icons */}
        <div className='space-y-2'>
        <h1 className='font-bold'>Currently working on</h1>
        <ul className='flex space-x-5'>
            <li className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]'>
                {" "}
                <FaAws/>
            </li>
            <li className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]'>
                {" "}
                <SiSpringboot/>
            </li>
            <li className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]'>
                {" "}
                <FaDocker/>
            </li>
            <li className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]'>
                {" "}
                <RiNextjsFill/>
            </li>
        </ul>

        </div>
        </div>
    </div>
    <div className='md:w-1/2 md:ml-48 md:mt-12 order-1 mt-8 md:order-none'>
    <img src={pic} alt="image" 
    className='rounded-full md:w-[450px] md:h-[450px]' />
    </div>
    </div>
    <br />
    <hr />
    </div>
        
    </>
  )
}

export default Home