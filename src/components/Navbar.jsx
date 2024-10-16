import React, { useState } from 'react'
import vks from '../assets/vks.jpg'
// import Scrollspy from 'react-scrollspy';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from 'react-router-dom';

function Navbar() {
        const [menu, setMenu] = useState(false);
        const navItems=[
            {
                id:1,
                text:'Home',
                path:'/'
            },
            {
                id:2,
                text:'About',
                path:'About'
            },
            {
                id:3,
                text:'Portfolio',
                path:'Portfolio'
            },
            {
                id:4,
                text:'Experiance',
                path:'Experiance'
            },
            {
                id:5,
                text:'Contact',
                path:'Contact'
            }
            
        ]

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white'>
    <div className='flex justify-between items-center h-16 '>
    <div className='flex space-x-2'>
      <img src={vks} alt="image" className='h-14 w-14 rounded-full'/>
      <h1 className='font-semibold'>
        VIKA<span className='text-blue-500 text-xl'>S</span>
        <p className='text-sm'>Full Stack Developer</p>
      </h1>
    </div>
    {/* Desktop Navbar */}
    <div>
      <ul className='hidden md:flex space-x-8'>
        {
            navItems.map(({id, text,path})=>(
                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                <Link to={path}>{text}</Link>
                </li>
            ))
        }
      </ul>
      {/* Hamburger icon change on navebar on mobile device  */}
    <div className='md:hidden'
    onClick={()=>setMenu(!menu)}>{menu?<IoCloseSharp size={24}/>:<AiOutlineMenu size={24} />}
    </div>
    </div>
    </div>
    
    {/* mobile navbar */}

    {menu && (<div className='bg-white'>
      <ul className='md:hidden flex flex-col h-screen space-y-4 text-xl justify-center items-center'>
      {
            navItems.map(({id, text,path})=>(
                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                <Link to={path}>{text}</Link>
                </li>
            ))
        }
      </ul>
    </div>)}
  </div>
  )
}

export default Navbar