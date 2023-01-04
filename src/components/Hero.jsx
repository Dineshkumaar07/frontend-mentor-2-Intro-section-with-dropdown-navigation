import React from 'react'
import heroDesktop from '../images/image-hero-desktop.png'
import heroMobile from '../images/image-hero-mobile.png'
import icon1 from '../images/client-audiophile.svg'
import icon2 from '../images/client-databiz.svg'
import icon3 from '../images/client-maker.svg'
import icon4 from '../images/client-meet.svg'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse sm:grid sm:gap-9  py-6 sm:py-2 sm:grid-cols-2 sm:place-items-center max-w-3xl lg:max-w-4xl sm:mx-auto mt-9'>
        <div className=''>
            <div className='mr-9'>
                <div className='text-center sm:text-left px-6 sm:px-0    '>
                    <h1 className='text-5xl sm:text-6xl font-bold '>Make remote work</h1>
                    <p className='text-dimgray sm:mt-9 mt-6 text-xl sm:text-lg'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                    <button className='px-6 py-2 bg-black text-white rounded-xl sm:mt-9 mt-6 hover:text-black hover:bg-white duration-200 border-2 border-black'>Learn more</button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2 place-items-center mt-10 sm:place-items-start'> 
                <img src={icon2} alt="icon1" className='w-16 sm:w-20'/>
                <img src={icon1} alt="icon2" className='w-16 sm:w-20'/>
                <img src={icon4} alt="icon3" className='w-16 sm:w-20'/>
                <img src={icon3} alt="icon4" className='w-16 sm:w-20'/>
            </div>
        </div>
        <picture className='mb-8 sm:mb-0' >
            <source media="(min-width: 825px)" srcSet={heroDesktop} />
            <img src={heroMobile} alt="Hero" />
        </picture>

    </div>
  )
}

export default Hero