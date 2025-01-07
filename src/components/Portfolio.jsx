import React from 'react'
import book from '../assets/book.png'
import shoe_store from '../assets/shoe_store.png'
import weather from '../assets/weather.png'
import pgenerator from '../assets/pgenerator.png'
import image_se from '../assets/image_se.png'

function Portfolio() {
    const pImage = [
        {
            id:1,
            image:book,
            text:'This is the e-book store. Where you can read free and premium books online.'
        },
        {
            id:2,
            image:shoe_store,
            text:'It is a Shoe store design. Which shows a simple and attractive UI to the client.'
        },
        {
            id:3,
            image:weather,
            text:'This is a weather appliation based on API, used to current weather status.'
        },      
        {
            id:4,
            image:pgenerator,
            text:'It is a random password generator which helps us to find complex passwords.'
        },
        {
            id:5,
            image:image_se,
            text:'It is a image search engine, based on API call and used for searching images.'
        }
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20'>
     <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold text-xl'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-3 my-3 gap-3 '>
            {   
                pImage.map(({id,image,text})=>(
                <li key={id} className='list-none border-[2px] p-3 shadow-lg rounded-3xl hover:scale-105 duration-200 cursor-pointer'>
                    <img src={image} alt={'pImage.${id}'}
                    className='h-[310px] md:w-[350px] mx-auto w-full rounded-3xl'
                    />
                    <div className='text-justify '>{text}</div>
                    <div className='flex justify-between p-2'>
                    <button className='bg-red-500 rounded-md text-white px-2 py-1 hover:scale-105 duration-200 '>Demo</button>
                    <button className='bg-green-500 rounded-md text-white px-2 py-1 hover:scale-105 duration-200'><a href="https://github.com/vikas-creates" target="_blank" rel="noopener noreferrer" aria-label="GitHub">Code</a></button>
                    </div>
                </li>
            ))}
        </div>
     </div>
     <hr />
    </div>
  )
}

export default Portfolio