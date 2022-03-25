import React from 'react'
import Image from 'next/image'
import Stats from './Stats';
import Header from './Header';

const Card= ()=> {
  return (
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 lg:min-h-cardMin'>
          <div className='relative h-56 lg:hidden lg:h-full lg:col-start-2 lg:row-span-2 lg:col-span-2 '>
                <div className='absolute z-10 h-full w-full bg-backgroundImageViolet opacity-50'></div>
                <Image className='rounded-t-lg' src="/images/image-header-mobile.jpg" layout='fill'/>
          </div>
          <div className='relative h-56 hidden lg:block lg:h-full lg:col-start-2 lg:row-span-2 lg:col-span-2'>
              <div className='absolute z-10 h-full w-full bg-backgroundImageViolet opacity-50'></div>
              <Image className='rounded-r-lg' src="/images/image-header-desktop.jpg" layout='fill'/>
          </div>
          <div className='lg:row-start-1 lg:pt-[75px] lg:pb-10 lg:pl-16 lg:pr-32 rounded-b-lg lg:rounded-l-lg lg:rounded-none bg-darkDesaturatedBlue'>
            <div>
                <Header></Header>
            </div>
            <div className='lg:flex'>
                <Stats statHeading='10k+' statParagraph='COMPANIES'></Stats>
                <Stats statHeading='314' statParagraph='TEMPLATE'></Stats>
                <Stats statHeading='12M+' statParagraph='QUERIES' ></Stats>
            </div>
          </div>
      </div>
  );
}

export default Card;