import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='p-5 bg-blue-400 flex items-center space-x-4'>
      <Link className="p-2 text-base hover:scale-150 transition-transform"to='/'>Home</Link>
      <Link className="p-2 text-base hover:scale-150 transition-transform"to='/profile'>Profile</Link>
      <Link className="p-2 text-base hover:scale-150 transition-transform"to='/protected'>Protected</Link>
    </nav>
  )
}

export default Nav
