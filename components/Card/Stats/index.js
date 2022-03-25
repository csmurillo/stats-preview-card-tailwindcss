import React from 'react'
import Image from 'next/image'

const Stats= ({statHeading,statParagraph})=> {
  return (
      <div className='flex flex-col place-content-center pb-8 lg:mr-14'>
          <div>
              <h2 className='flex place-content-center lg:place-content-start text-2xl font-bold pb-1 text-white'>{statHeading}</h2>
          </div>
          <div>
              <p className='flex place-content-center lg:place-content-start font-lexendDeca text-mainParagraphWhite text-xs'>{statParagraph}</p>
          </div>
      </div>
  );
}

export default Stats;