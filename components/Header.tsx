import React from 'react'
import Navbar from './Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='bg-hero min-h-[626px] relative overflow-hidden w-full'>
      {/* Navbar */}
      <Navbar />
      {/* Text + Button */}
      <div></div>
      {/* Images */}
      <div></div>
    </div>
  )
}

export default Header