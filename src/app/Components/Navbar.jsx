"use client"
import { AuthContext } from '@/Context/authContext';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import Logo from "../../../Assets/Logo.png"
import Image from 'next/image';
import { toast } from 'react-toastify';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {data}=useContext(AuthContext)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleBlogAccess=()=>{
      if(!data){
        toast.error("Please sign in to access Blogs",{
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      }
  }

  useEffect(()=>{
  },[])
  return (
    <nav className="bg-gray-800 py-4  z-10">
      <div className="container mx-auto flex justify-between px-5 md:px-10">
        <div className='justify-self-center'>
          <Link href="#" className="text-white text-lg font-bold">
          <Image src={Logo} width={60}></Image>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-16">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/blogs"  className="text-white" onClick={handleBlogAccess}>Blogs</Link>
          <Link href="/about" className="text-white">About</Link>
          <Link href="/Login&Signup" className="text-white">{data?"Profile":"Login / Signup"}</Link>
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
        <Link href="/" className="block text-white py-2 px-4">Home</Link>
        <Link href="/blogs" className="block text-white py-2 px-4">Blogs</Link>
        <Link href="/about" className="block text-white py-2 px-4">About</Link>
        <Link href="/Login&Signup" className="block text-white py-2 px-4">{data?"Profile":"Login / Signup"}</Link>
      </div>
    </nav>
  );
};

export default Navbar;