'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <span className="text-3xl font-extrabold text-gray-900 tracking-tighter group-hover:text-red-600 transition-colors">
                 Ro<span className="text-red-600 group-hover:text-gray-900 transition-colors">GenZ</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-8 items-center">
            {['Home', 'News', 'About', 'Founder', 'Media', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wide transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              href="/admin" 
              className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:bg-red-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
               Admin
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="bg-red-50 border-l-4 border-red-500 text-red-700 block pl-3 pr-4 py-2 text-base font-medium sm:pl-5">Home</Link>
            <Link href="/news" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium sm:pl-5">News</Link>
            <Link href="/about" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium sm:pl-5">About</Link>
            <Link href="/founder" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium sm:pl-5">Founder</Link>
            <Link href="/media" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium sm:pl-5">Media</Link>
            <Link href="/contact" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium sm:pl-5">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
