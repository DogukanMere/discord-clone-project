import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='grid grid-cols-2 w-full'>
      {/* Logo */}
      <div>Logo</div>
      {/* Nav Items */}
      <div className='hidden lg:inline-grid lg:col-span-1'>Items</div>
      {/* Hamburger */}
      <div className='inline-grid lg:hidden justify-end justify-end'>Hamburger</div>
    </nav>
  )
}

export default Navbar