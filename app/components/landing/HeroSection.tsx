import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const HeroSection = () => {
    return (
        <div className='first-section w-screen flex flex-col gap-4 px-8 pt-8 relative z-0'>

            <div className='absolute top-0 left-0  size-full rounded-full bg-primary blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10'></div>

            <h1 className='lg:text-7xl font-black font-sans'>
                <span className='underline decoration-primary'>Fast</span>, <span className='underline decoration-primary'>Secure</span> and Reliable File Sharing
            </h1>

            <p>
                Your trusted platform for, high-speed file sharing. Whether you're sending large files, collaborating with teams, or managing server transfers, we’ve got you covered.
            </p>

            <div className='w-max flex gap-4 items-center mt-15'>
                <Link to='/dashboard' className='bg-primary text-white px-4 py-2 flex items-center gap-8 hover:bg-white hover:text-primary transition-colors duration-500'>
                    GET STARTED
                    <ArrowRightIcon />
                </Link>
                <button className='bg-white text-black px-4 py-2'>LEARN MORE</button>
            </div>
        </div>
    )
}

export default HeroSection