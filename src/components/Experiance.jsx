import React from 'react'
import react from '../assets/react.png'
import js from '../assets/js.png'
import node from '../assets/node.png'
import firebase from '../assets/firebase.png'
import mongodb from '../assets/mongodb.png'
import aws from '../assets/aws.png'

function Experiance() {
    const pImage = [
        {
            id:1,
            image:react,
            // text:'This is the react based project. You can check it out by clicking the buttons below.'
        },
        {
            id:2,
            image:js,
            // text:'This is the JS based project. You can check it out by clicking the buttons below.'
        },
        {
            id:3,
            image:node,
            // text:'This is the NodeJs based project. You can check it out by clicking the buttons below.'
        },
        {
            id:4,
            image:firebase,
            // text:'This is the firbase based project. You can check it out by clicking the buttons below.'
        },
        {
            id:5,
            image:mongodb,
            // text:'This is the mongoDb based project. You can check it out by clicking the buttons below.'
        },
        {
            id:6,
            image:aws,
            // text:'This is the aws based project. You can check it out by clicking the buttons below.'
        },
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
            <p className='text-justify'>I have a very good experience in the below technologies. I had been created multiple high quality projects by using these technologies. 
                I am working with these technologies from past 4 years and have a very good hand on it.
            </p>
            <div className='grid grid-cols-2 md:grid-cols-4 my-3 gap-6'>
            {   
                pImage.map(({id,image})=>(
                <li key={id} className='list-none rounded-full p-3 border-[1px] shadow-md hover:scale-105 duration-200 cursor-pointer'>
                    <img src={image} alt={'pImage.${id}'}
                    className='h-[250px] w-[250px] mx-auto'
                    />
                </li>
            ))}
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Experiance