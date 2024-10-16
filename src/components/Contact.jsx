import React from 'react';
import { useForm } from 'react-hook-form';
import form from '../assets/fcc.png';
import bgi from '../assets/bgi.avif';
import axios from 'axios';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name, // Access form data from the 'data' object
      email: data.email,
      number: data.pNumber,
      text: data.textarea,
    };
    try {
      await axios.post('https://getform.io/f/bvrevrrb', userInfo);
      alert('Your message has been sent');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='relative max-w-screen-2xl container mx-auto p-4 md:px-20 mt-14 justify-between'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: `url(${bgi})`,
            opacity: 0.3,
            zIndex: -1,
            borderRadius: 'inherit',
          }}
        ></div>
        <div className='md:flex flex relative z-10'>
          <div className='relative border-2 rounded-lg md:w-2/4 w-full p-4 mt-4 mx-auto'>
            <div className='text-5xl mt-8 font-bold text-center'>Contact</div>
            <div className='mt-12'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mx-auto flex flex-col space-y-8 items-center'>
                  <input
                    type='text'
                    name='name'
                    id='names'
                    placeholder='Name'
                    {...register('name', { required: 'Name is required' })}
                    className='border-slate-400 h-8 border-[2px] focus:outline-none shadow-sm focus:border-blue-400 rounded-md w-2/3'
                  />
                  {errors.name && <p>{errors.name.message}</p>}

                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    {...register('email', { required: 'Email is required' })}
                    className='border-slate-400 bg-white h-8 border-[2px] shadow-sm focus:outline-none focus:border-blue-400 rounded-md w-2/3'
                  />
                  {errors.email && <p>{errors.email.message}</p>}

                  <input
                    type='text'
                    name='number'
                    id='number'
                    placeholder='Phone Number'
                    {...register('number', { required: 'Phone Number is required' })}
                    className='border-slate-400 bg-white h-8 border-[2px] shadow-sm  focus:outline-none focus:border-blue-400 rounded-md w-2/3 '
                  />
                  {errors.number && <p>{errors.number.message}</p>}

                  <textarea
                    name='textarea'
                    id='textarea'
                    placeholder='Message'
                    rows='4'
                    {...register('textarea', { required: 'Message is required' })}
                    className='border-slate-400 bg-white border-[2px] shadow-sm  focus:outline-none focus:border-blue-400 rounded-md w-2/3'
                  />
                  {errors.textarea && <p>{errors.textarea.message}</p>}

                  <button
                    type='submit'
                    className='bg-orange-400 text-lg rounded-lg p-1 shadow-sm font-semibold cursor-pointer hover:scale-105 duration-200'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div>
              <img
                src={form}
                alt='image'
                className='md:h-[350px] md:w-[350px] h-0 w-0 shadow-lg rounded-md mt-24'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
