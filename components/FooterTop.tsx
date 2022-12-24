import React from 'react';
import countries from './countries';
import { GrTwitter, GrInstagram, GrFacebook, GrYoutube } from 'react-icons/gr';

type Props = {};

const FooterTop = (props: Props) => {
  return (
    <>
      {/* First Social Grid */}
      <div className='col-span-4 md:col-span-4 md:row-span-2 md:row-end-2 lg:grid-cols-4 lg:row-span-1 mb-[56px]'>
        <div className='flex flex-col'>
          <h4 className='font-bold text-[32px] text-hero font-secondary uppercase leading-[95%] tracking-[0.1rem]'>
            Imagine a place
          </h4>
          <div className='bg-transparent mt-[24px]'>
            <select
              name='language'
              id='language'
              className='text-[14px] font-light cursor-pointer'
            >
              <option value='usa' selected>
                🇺🇸 English, USA
              </option>
              {countries.map((country) => {
                return (
                  <option key={country.id} value=''>
                    {country.text}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='mt-[24px] flex flex-row gap-7'>
            <a href='#'>
              <GrTwitter className='w-[22px] h-[22px]' />
            </a>
            <a href='#'>
              {' '}
              <GrInstagram className='w-[22px] h-[22px]' />
            </a>
            <a href='#'>
              <GrFacebook className='w-[22px] h-[22px]' />
            </a>
            <a href='#'>
              <GrYoutube className='w-[22px] h-[22px]' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
