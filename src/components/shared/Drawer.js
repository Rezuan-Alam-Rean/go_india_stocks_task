"use client";
import React, { useState } from 'react';
import { TiMediaPlay } from "react-icons/ti";


const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className="flex">
          {/* Sidebar */}
          <div className={`transform top-0 left-0 w-64 bg-blue-950  text-white fixed h-full z-40 overflow-auto ease-in-out transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Sidebar links */}
            <nav className="mt-10">
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">Home</a>
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">About</a>
             
            </nav>
          </div>
    
          {/* Overlay */}
          {isOpen && (
            <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setIsOpen(false)}></div>
          )}
    
          {/* Content */}
          <div className="flex-1 p-10 text-2xl font-bold">
            <p> sidebar.</p>
            
          </div>
    
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed z-50 mt-60  text-white  bg-blue-950 h-24 w-6  ${isOpen ? 'left-64' : 'left-0'} transition-all duration-300`}
          >
            {/* Icon */}
            <TiMediaPlay size={30} />

          </button>
        </div>
      );
    };
    

export default Drawer;



