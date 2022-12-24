import React from 'react';
import Image from 'next/image';

type Props = {
  imgsrc: string;
  h2: string;
  p: string;
  isOrdered: boolean;
  isGray: boolean;
};

const ContentSection = ({ imgsrc, h2, p, isOrdered, isGray }: Props) => {
  return (
    <div
      className={`notShow w-full flex justify-center ${
        isGray ? 'bg-contentGray' : 'bg-white'
      }`}
    >
      {/* Flex Container */}
      <div className='max-w-[1180px] px-[24px] md:px-[40px] py-[56px] md:py-[80px] lg:py-[160px] flex flex-col justify-center items-center md:flex-row gap-0 md:gap-[6rem]'>
        {/* First Container */}
        <div
          className={`flex ${
            isOrdered ? 'md:order-1' : 'md:order-3'
          } flex-1 md:flex-[1.5] mt-[24px]`}
        >
          <Image
            src={`${imgsrc}`}
            alt='content image'
            width={678}
            height={440}
          />
        </div>
        {/* Second Container */}
        <div
          className={`flex flex-col flex-1 order-2 md:order-2 mt-[20px] px-0 m-0`}
        >
          <h2 className='leading-[120%] font-bold text-primary md:text-[48px]'>
            {h2}
          </h2>
          <p className='content-p font-regular text-primary mt-[24px] leading-[1.625] font-lato'>
            {p}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
