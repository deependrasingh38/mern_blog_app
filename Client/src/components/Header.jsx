// // import { Button, Navbar, TextInput } from 'flowbite-react'
// // import React from 'react'

// import { Button, Navbar, TextInput } from "flowbite-react";
// import { Link } from "react-router-dom";
// import {AiFillIdcard, AiOutlineSearch} from 'react-icons/ai';

// export default function Header() {

//   return(
//     <>

//     <Navbar className="border-gray-300 border-b p-2">
//     <Link to="/"  className="self-center font-mono whitespace-nowrap text-sm sm:text-xl font-semibold ">
//     <span className="px-2 py-1 bg-linear-to-r from-indigo-400 via-purple-500 to-pink-500 text-white font-mono">Sahand's</span>Blog
//     </Link>
//     <form >
//       <TextInput
//          type="text"
//          placeholder="Search..."
//          rightIcon={AiOutlineSearch}
//          className="hidden lg:inline" 
//       />
//     </form>
//     <Button className="w-12 h-10" color='gray'>
//       <AiOutlineSearch/>
//     </Button>
//     </Navbar>
//     </>
//   )

// }

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-1 text-lg font-semibold">
            <span className="rounded bg-indigo-500 px-2 py-0.5 text-white">
              Sahand&apos;s
            </span>
            <span>Blog</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-full max-w-xs">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded border border-gray-300 py-1.5 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>

            <button className="rounded p-2 hover:bg-gray-100">
              <FaMoon />
            </button>

            <Link
              to="/login"
              className="rounded bg-indigo-500 px-4 py-1.5 text-white"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">

            {/* Mobile Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded border border-gray-300 py-2 pl-9 pr-3 text-sm focus:outline-none"
              />
            </div>

            {/* Mobile Links */}
           
           <nav className="flex flex-col gap-3 text-sm">

              <Link to='/' onClick={()=> setOpen(false)} >Home</Link>
              <Link to='/about' onClick={()=> setOpen(false)}>About</Link>
              <Link to='/projects' onClick={()=> setOpen(false)}>Projects</Link>
              <Link to='/login' onClick={()=> setOpen(false)}>Login</Link>
           </nav>
            
          </div>
        )}
      </div>
    </header>
  );
}
