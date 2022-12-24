import React from 'react';
import Image from 'next/image';
import { MdOutlineFileDownload } from 'react-icons/md';

type Props = {};

const ContentLast = (props: Props) => {
  return (
    <div className='w-full bg-contentGray pb-[56px] md:pb-[80px] lg:pb-[120px]'>
      <div className='max-w-[1180px] mx-auto px-[24px] py-[56px] md:px-[40px] md:py-[80px] lg:pt-[120px] '>
        {/* Text Container */}
        <div className='max-w-full text-start md:text-center'>
          <h2 className='uppercase font-extrabold text-primary'>
            RELIABLE TECH FOR STAYING CLOSE
          </h2>
          <p className='text-[16px] md:text-[20px] text-primary mt-[24px] mx-auto max-w-[980px]'>
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        {/* Image */}

        <Image
          src='/img/content5.svg'
          alt='content image'
          width={1180}
          height={715}
        />
      </div>
      {/* Text + Button */}
      <div className='max-w-[1180px] mx-auto relative text-center px-[24px]'>
        <div className='flex justify-center'>
          <img
            src='/img/stars.svg'
            alt='stars'
            className='absolute select-none'
          />
        </div>

        <h4 className='text-[32px] mt-[30px] mb-[40px]'>
          Ready to start your journey?
        </h4>
        <a
          href='/'
          className='bg-secondary flex md:w-fit md:mx-auto items-center justify-center w-full text-white text-[20px] rounded-full px-[32px] py-[16px] shadow-md'
        >
          <MdOutlineFileDownload className='text-[28px] mr-2 inline-block' />
          Download from Google Play
        </a>
      </div>
    </div>
  );
};

export default ContentLast;
