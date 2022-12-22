import React from 'react'
import Navbar from './Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='bg-hero min-h-[626px] relative overflow-hidden w-full'>
      {/* Navbar */}
      <Navbar />
      {/* Text + Button */}
      <div className='w-full px-[24px] md:px-[40px] py-[56px] md:py-[80px] text-white'>
        <h1 className='font-bold font-secondary text-[48.25px] uppercase leading-[95%] tracking-[0.1rem]'>Imagine a place...</h1>
        <p className='mt-[24px] md:mt-[40px]'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
      </div>
      {/* Images */}
      <div></div>
    </div>
  )
}

export default Header