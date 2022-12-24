import React from 'react';
import Navbar from './Navbar';
import { MdOutlineFileDownload } from 'react-icons/md';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='bg-hero min-h-[626px] relative overflow-hidden w-full md:pb-[80px] lg:pb-0'>
      {/* Navbar */}
      <Navbar />
      {/* Text + Button */}
      <div className='w-full z-[5] px-[24px] md:px-[40px] py-[56px] md:py-[80px] text-white md:w-[70%] lg:w-full lg:flex lg:flex-col lg:text-center lg:max-w-[780px] lg:m-auto'>
        <h1 className='font-bold font-secondary uppercase leading-[95%] tracking-[0.1rem]'>
          Imagine a place...
        </h1>
        <p className='z-[7] mt-[24px] md:mt-[40px] font-light mb-[8px] hero-p'>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className='z-[7] flex md:flex-col flex-wrap justify-start lg:justify-center lg:flex-row'>
          <a
            href='/'
            className='flex items-center w-fit justify-center text-primary text-[18px] font-medium space-x-2 mt-[24px] mr-[24px] px-[32px] py-[16px] bg-white rounded-full shadow-md'
          >
            <MdOutlineFileDownload className='text-[28px] mr-2' />
            Download for Mac
          </a>
          <a
            href='/'
            className='flex md:block items-center w-fit justify-center text-white text-[18px] font-medium space-x-2 mt-[24px] px-[32px] py-[16px] bg-primary rounded-full shadow-md'
          >
            Open Discord in your browser
          </a>
        </div>
      </div>
      {/* Images */}
      <div className='relative select-none md:absolute md:top-0 md:left-0 md:h-full md:w-full'>
        <img
          src='/img/hero1.svg'
          alt='hero image'
          className='relative z-20 block md:hidden lg:block w-full max-w-[880px] ml-[-80px] lg:left-[50%] lg:h-auto lg:w-auto lg:bottom-0 lg:ml-[-1030px] lg:absolute lg:transform-none lg:max-w-none'
        />
        <img
          src='/img/hero2.svg'
          alt='hero image'
          className='absolute max-w-[615px] z-20 bottom-0 hidden md:block md:left-[50%] md:ml-[-70px] lg:ml-[370px]'
        />
        <img
          src='/img/hero3.svg'
          alt='hero image'
          className='absolute bottom-0 z-[4] hidden top-0 md:inset-0 md:ml-[-1280px] md:top-auto md:bottom-0 md:block md:left-auto'
          width='2560'
          height='626'
        />
      </div>
    </div>
  );
};

export default Header;
