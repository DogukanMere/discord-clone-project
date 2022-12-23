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
      <div className='w-full px-[24px] md:px-[40px] py-[56px] md:py-[80px] text-white w-[98%] md:w-[70%]'>
        <h1 className='font-bold font-secondary text-[48.25px] uppercase leading-[95%] tracking-[0.1rem] md:text-[4.4rem]'>
          Imagine a place...
        </h1>
        <p className='mt-[24px] md:mt-[40px] font-light'>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className='flex md:flex-col flex-wrap'>
          <a
            href='/'
            className='flex items-center w-fit justify-center text-primary text-[18px] font-medium items-center space-x-2 mt-[24px] mr-[24px] px-[32px] py-[16px] bg-white rounded-full'
          >
            <MdOutlineFileDownload className='text-[28px] mr-2' />
            Download for Mac
          </a>
          <a
            href='/'
            className='flex md:block items-center w-fit justify-center text-white text-[18px] font-medium items-center space-x-2 mt-[24px] px-[32px] py-[16px] bg-primary rounded-full'
          >
            Open Discord in your browser
          </a>
        </div>
      </div>
      {/* Images */}
      <div></div>
    </div>
  );
};

export default Header;
