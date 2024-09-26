"use client"
import React from 'react';
import Link from 'next/link';
//  ........................linking in next.js..................................
const Navbar = () => {
  return (
    <div className="bg-gray-800 h-screen p-5">
      <ul className="flex flex-col text-white font-extrabold space-y-4">
        <li>
          <Link href="/"
             className="hover:text-teal-400 cursor-pointer">Main Page
          </Link>
        </li>
        <li>
          <Link href="/routing"
            className="hover:text-teal-400 cursor-pointer">Routing
          </Link>
        </li>
        <li>
          <Link href="/linking"
             className="hover:text-teal-400 cursor-pointer">Linking
          </Link>
        </li>
        <li>
          <Link href="/props"
            className="hover:text-teal-400 cursor-pointer">Props
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
