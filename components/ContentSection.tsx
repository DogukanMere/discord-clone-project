import React from 'react';
import Image from 'next/image';

type Props = {
  imgsrc: string;
  h2: string;
  p: string;
  order: number;
};

const ContentSection = (props: Props) => {
  return (
    <div className={`w-full flex justify-center`}>
      {/* Flex Container */}
      <div className='max-w-[1180px] px-[24px] md:px-[40px] py-[56px] md:py-[80px] lg:py-[120px] flex flex-col justify-center items-center md:flex-row md:space-x-[4rem]'>
        {/* First Container */}
        <div
          className={`flex md:order-${props.order} flex-1 md:flex-[1.5] mt-[24px]`}
        >
          <Image
            src={'/img/content1.svg'}
            alt='content image'
            width={678}
            height={440}
          />
        </div>
        {/* Second Container */}
        <div className={`flex flex-col flex-1 md:order-2 mt-[20px] px-0`}>
          <h2 className='leading-[120%] font-bold text-primary md:text-[48px]'>
            {props.h2}
          </h2>
          <p className='content-p font-light text-primary mt-[24px] leading-[1.625]'>
            {props.p}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
