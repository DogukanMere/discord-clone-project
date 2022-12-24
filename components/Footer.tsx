import React from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import Link from 'next/link';
import Image from 'next/image';
import { FaDiscord } from 'react-icons/fa';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='w-full bg-primary text-white pt-[80px] pb-[64px]'>
      {/* Main Grid */}
      <div className='max-w-[1180px] mx-auto grid grid-cols-4 grid-rows-1 gap-[20px] px-[24px] md:px-[40px] md:grid-cols-8 md:grid-rows-1 lg:grid-cols-12 lg:grid-rows-1'>
        <FooterTop />
        <FooterBottom />
      </div>

      {/* Border */}
      <div className='max-w-[1180px] mx-auto'>
        <div className='max-w-[1180px] mx-[24px] md:mx-[40px] border-b-[1px] border-hero px-[24px] md:px-[40px]'></div>
      </div>

      {/* Footer under border Logo + Button */}
      <div className='max-w-[1180px] mx-auto flex justify-between px-[24px] md:px-[40px] mt-[32px]'>
        <div>
          <Link
            href='#'
            className='flex space-x-1 items-center col-span-1 w-fit cursor-pointer'
          >
            <FaDiscord className='w-[40px] h-[40px] p-1' />
            <Image
              alt='logo'
              src='/img/discord.png'
              width='90'
              height='10'
              className='py-3'
            />
          </Link>
        </div>
        <Link
          href='#'
          className='flex items-center px-[16px] py-[7px] bg-hero rounded-full text-[14px] hover:shadow-xl hover:bg-[#6874f3] transition-all duration-300'
        >
          Sign up
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
