"use client"
import { AuthContext } from '@/Context/authContext';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {user}=useContext(AuthContext)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(()=>{
    console.log(user)
  },[])
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="#" className="text-white text-lg font-bold">Logo</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/Blogs" className="text-white">Blogs</Link>
          <Link href="/about" className="text-white">About</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <Link href="#" className="block text-white py-2 px-4">Home</Link>
        <Link href="#" className="block text-white py-2 px-4">About</Link>
        <Link href="#" className="block text-white py-2 px-4">Blogs</Link>
      </div>
    </nav>
  );
};

export default Navbar;