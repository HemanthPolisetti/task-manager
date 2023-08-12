import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className=' flex justify-between items-center bg-cf'>
        <div className='text-2xl italic font-bold flex items-center'>
        <img src={logo} alt='logo' className='fill-cs'/>
        <span>TM</span>
        </div>
      <div className='text-xl italic'>
      <ul className='flex mr-10'>
      <Link to='/' className='mr-10'><button>Home</button></Link>
      <Link to='/add'> <button className='mr-10'>AddTask</button> </Link>
      <Link to='/about'>  <button>About</button> </Link>
      </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar
