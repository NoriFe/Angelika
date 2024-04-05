import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'><span className='bg-gradient-to-r from-violet-500 to-violet-800 text-transparent bg-clip-text'>School of Needs</span> by Angelika</h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Welcome to School of Needs, where we provide a nurturing and inclusive environment for students with special needs. With personalized education plans and dedicated educators, we empower every child to thrive academically, socially, and emotionally. Through innovative teaching methods and a comprehensive support network, we foster a love for learning and promote independence. At School of Needs, every child's unique abilities are celebrated and supported.</p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-violet-500 to-violet-800 py-3 px-4 mx-3 rounded-md">Learn More</a>
            <a href="#" className="py-3 px-4 mx-3 border rounded-md">Policy of the School</a>
        </div>
        <div className='flex mt-10 justify-center'>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-violet-700 shadow-violet-400 mx-2 my-4'>
                <source src={video1} type='video/mp4' />
            </video>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-violet-700 shadow-violet-400 mx-2 my-4'>
                <source src={video2} type='video/mp4' />
            </video>
        </div>


    </div>
  )
}

export default Hero
