import React from 'react'
import Image from 'next/image'

const Header= ()=> {
  return (
    <div>
        <div className='pt-10 pb-5 px-5 lg:pt-0 lg:px-0 '>
            <h1 className='text-3xl lg:text-4xl text-white text-center lg:text-left font-inter font-bold'>Get <span className='text-softViolet'>insights</span> that help your business grow.</h1>
        </div>
        <div className='px-8 pb-16 lg:px-0 lg:pr-10'>
            <p className='text-md text-center lg:text-left text-mainParagraphWhite'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficieny.</p>
        </div>
    </div>
  );
}

export default Header;


