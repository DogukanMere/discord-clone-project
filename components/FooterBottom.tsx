import React from 'react';

type Props = {};

const FooterBottom = (props: Props) => {
  return (
    <>
      {/* FOOTER 1 */}
      <div className='col-span-2 text-[16px] flex flex-col mb-[40px]'>
        <h5 className='pt-[8px] text-hero'>Product</h5>
        <a href='#' className='mt-[8px] hover:underline'>
          Download
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Nitro
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Status
        </a>
      </div>
      {/* FOOTER 2 */}
      <div className='col-span-2 text-[16px] flex flex-col mb-[40px]'>
        <h5 className='pt-[8px] text-hero'>Company</h5>
        <a href='#' className='mt-[8px] hover:underline'>
          About
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Jobs
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Branding
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Newsroom
        </a>
      </div>
      {/* FOOTER 3 */}
      <div className='col-span-2 text-[16px] flex flex-col mb-[40px]'>
        <h5 className='pt-[8px] text-hero'>Resources</h5>
        <a href='#' className='mt-[8px] hover:underline'>
          College
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Support
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Safety
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Blog
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Feedback
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Developers
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          StreamKit
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Creators
        </a>
      </div>
      {/* FOOTER 4 */}
      <div className='col-span-2 text-[16px] flex flex-col mb-[40px]'>
        <h5 className='pt-[8px] text-hero'>Policies</h5>
        <a href='#' className='mt-[8px] hover:underline'>
          Terms
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Privacy
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Cookie Settings
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Guidelines
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Acknowledgements
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Licenses
        </a>
        <a href='#' className='mt-[8px] hover:underline'>
          Moderation
        </a>
      </div>
    </>
  );
};

export default FooterBottom;
