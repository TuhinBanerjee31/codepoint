import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/codepoint.png';

const Navbar = () => {
  return (
    <nav className='flex items-end gap-x-1 shadow-lg shadow-[#def0ff]-500/40 w-full p-3'>
    <img src={logo} alt='logo' />
    <Link to={`/`}>
      <h3 className='home-title text-2xl font-light'><span className='font-medium'>Code</span>Point</h3>
    </Link>
  </nav>
  )
}

export default Navbar;